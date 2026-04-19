<?php
header('Content-Type: application/json; charset=utf-8');
header('Access-Control-Allow-Methods: POST');

// CORS: solo se acepta desde el dominio propio
$allowed_origins = [
    'https://cquibelpropiedades.com.ar',
    'https://www.cquibelpropiedades.com.ar',
];
$origin = $_SERVER['HTTP_ORIGIN'] ?? '';
if ($origin && in_array($origin, $allowed_origins, true)) {
    header('Access-Control-Allow-Origin: ' . $origin);
} elseif ($origin) {
    http_response_code(403);
    echo json_encode(['success' => false, 'message' => 'Forbidden']);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Method not allowed']);
    exit;
}

$input = json_decode(file_get_contents('php://input'), true);
if (!$input) {
    $input = $_POST;
}

// Honeypot: si viene relleno, es un bot → simular éxito sin enviar
if (!empty($input['_hp'])) {
    echo json_encode(['success' => true, 'message' => 'Mensaje enviado']);
    exit;
}

function clean(string $str): string {
    return htmlspecialchars(strip_tags(trim($str)), ENT_QUOTES, 'UTF-8');
}

$name     = mb_substr(clean($input['name']     ?? ''), 0, 120);
$email    = mb_substr(clean($input['email']    ?? ''), 0, 254);
$phone    = mb_substr(clean($input['phone']    ?? ''), 0, 30);
$interest = mb_substr(clean($input['interest'] ?? ''), 0, 80);
$message  = mb_substr(clean($input['message']  ?? ''), 0, 2000);

if (!$name || !$email || !$message) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Campos requeridos faltantes']);
    exit;
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Email inválido']);
    exit;
}

$to = 'cquibel.propiedades@gmail.com';

// Asunto: "Tipo de consulta - Nombre completo - Tel"
$subject_parts = array_filter([$interest ?: 'Consulta', $name, $phone]);
$subject = implode(' - ', $subject_parts);

// Cuerpo del mail
$body  = "Nombre completo\r\n";
$body .= $name . "\r\n\r\n";
$body .= "Celular\r\n";
$body .= ($phone ?: '—') . "\r\n\r\n";
$body .= "Me interesa\r\n";
$body .= ($interest ?: '—') . "\r\n\r\n";
$body .= "Consulta:\r\n";
$body .= $message . "\r\n\r\n";
$body .= "---\r\n";
$body .= "Email del remitente: " . $email . "\r\n";
$body .= "Enviado desde: cquibelpropiedades.com.ar\r\n";

$headers  = "From: web@cquibelpropiedades.com.ar\r\n";
$headers .= "Reply-To: " . $email . "\r\n";
$headers .= "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/plain; charset=UTF-8\r\n";
$headers .= "Content-Transfer-Encoding: 8bit\r\n";
$headers .= "X-Mailer: PHP/" . phpversion();

$sent = mail($to, '=?UTF-8?B?' . base64_encode($subject) . '?=', $body, $headers);

if ($sent) {
    echo json_encode(['success' => true, 'message' => 'Mensaje enviado']);
} else {
    http_response_code(500);
    echo json_encode(['success' => false, 'message' => 'Error al enviar']);
}
