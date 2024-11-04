<?php
header('Content-Type: application/json');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    exit(json_encode(['success' => false, 'message' => 'Invalid request method']));
}

$phone = filter_input(INPUT_POST, 'phone', FILTER_SANITIZE_STRING);
$message = filter_input(INPUT_POST, 'message', FILTER_SANITIZE_STRING);

if (empty($phone) || empty($message)) {
    exit(json_encode(['success' => false, 'message' => 'All fields are required']));
}

// Here you would typically:
// 1. Validate the phone number format
// 2. Save to database
// 3. Send notification emails
// 4. Integrate with CRM system

// For demo purposes, we'll just return success
echo json_encode([
    'success' => true,
    'message' => 'Consultation request received'
]);