<?php
session_start();
?>
<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Центр Бесплатной Юридической Консультации</title>
    <link rel="stylesheet" href="css/style.css">
    <script src="js/jquery-3.6.0.min.js"></script>
    <script src="js/jquery.maskedinput.min.js"></script>
    <script src="js/countUp.min.js"></script>
</head>
<body>
    <?php include 'components/header.php'; ?>
    
    <main>
        <?php include 'components/hero.php'; ?>
        <?php include 'components/intro-text.php'; ?>
        <?php include 'components/consultation-counter.php'; ?>
        <?php include 'components/statistics.php'; ?>
        <?php include 'components/consultation-instructions.php'; ?>
        <?php include 'components/consultation-steps.php'; ?>
        <?php include 'components/consultation-types.php'; ?>
        <?php include 'components/lawyers-grid.php'; ?>
        <?php include 'components/pricing-tabs.php'; ?>
        <?php include 'components/recent-questions.php'; ?>
        <?php include 'components/online-consultation.php'; ?>
        <?php include 'components/faq.php'; ?>
        <?php include 'components/call-to-action.php'; ?>
        <?php include 'components/lawyer-info.php'; ?>
    </main>

    <?php include 'components/footer.php'; ?>
    
    <script src="js/main.js"></script>
</body>
</html>