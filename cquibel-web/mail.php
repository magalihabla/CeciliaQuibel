<?php
// Suprimir warnings PHP que corromperían el JSON de respuesta
error_reporting(0);
ini_set('display_errors', 0);
ob_start();

header('Content-Type: application/json; charset=utf-8');
header('Access-Control-Allow-Methods: POST');

// CORS: permitir mismo origen y dominios de producción
$allowed_origins = [
    'https://cquibelpropiedades.com.ar',
    'https://www.cquibelpropiedades.com.ar',
];
$origin = $_SERVER['HTTP_ORIGIN'] ?? '';
$host   = $_SERVER['HTTP_HOST']   ?? '';
$is_same_origin = $origin && (
    $origin === 'https://' . $host ||
    $origin === 'http://'  . $host
);
if ($origin) {
    if ($is_same_origin || in_array($origin, $allowed_origins, true)) {
        header('Access-Control-Allow-Origin: ' . $origin);
    } else {
        ob_end_clean();
        http_response_code(403);
        echo json_encode(['success' => false, 'message' => 'Forbidden']);
        exit;
    }
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    ob_end_clean();
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Method not allowed']);
    exit;
}

$input = json_decode(file_get_contents('php://input'), true);
if (!$input) {
    $input = $_POST;
}

// Honeypot: si viene relleno, es un bot
if (!empty($input['_hp'])) {
    ob_end_clean();
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
    ob_end_clean();
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Campos requeridos faltantes']);
    exit;
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    ob_end_clean();
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Email inválido']);
    exit;
}

$to = 'cquibel.propiedades@gmail.com';

$subject_parts = array_filter([$interest ?: 'Consulta', $name, $phone]);
$subject = implode(' - ', $subject_parts);

$host_name  = $_SERVER['HTTP_HOST'] ?? 'cquibelpropiedades.com.ar';
$from       = 'no-reply@' . $host_name;
$origin_url = 'https://' . $host_name;

$body  = "Nombre completo\r\n";
$body .= $name . "\r\n\r\n";
$body .= "Celular\r\n";
$body .= ($phone ?: '-') . "\r\n\r\n";
$body .= "Me interesa\r\n";
$body .= ($interest ?: '-') . "\r\n\r\n";
$body .= "Consulta:\r\n";
$body .= $message . "\r\n\r\n";
$body .= "---\r\n";
$body .= "Email del remitente: " . $email . "\r\n";
$body .= "Enviado desde: " . $origin_url . "\r\n";

$headers  = "From: " . $from . "\r\n";
$headers .= "Reply-To: " . $email . "\r\n";
$headers .= "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/plain; charset=UTF-8\r\n";
$headers .= "Content-Transfer-Encoding: 8bit\r\n";
$headers .= "X-Mailer: PHP/" . phpversion();

ob_end_clean();
$sent = mail($to, '=?UTF-8?B?' . base64_encode($subject) . '?=', $body, $headers);

if ($sent) {
    echo json_encode(['success' => true, 'message' => 'Mensaje enviado']);
} else {
    $err = error_get_last();
    http_response_code(500);
    echo json_encode(['success' => false, 'message' => 'Error al enviar', 'debug' => $err['message'] ?? 'unknown']);
}
