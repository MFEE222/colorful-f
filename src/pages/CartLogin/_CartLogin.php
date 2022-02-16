<!DOCTYPE html>
<html lang="en">

<?php include "../../components/Head/_Head.php"; ?>

<head>
    <style>
    .container {
        display: flex | inline-flex;

        margin: 0 auto;

    }
    </style>
</head>

<body>

    <!-- navbar -->
    <?php include "../../components/Navbar/_Navbar.php" ?>

    <!-- breadcrumb -->
    <?php include "../../components/Breadcrumb/_Breadcrumb.php" ?>

    <!-- content  -->
    <div class="container">
        <div class="box align-self-center"><?php include "../../components/CartLoginCard/_CartLoginCard.php" ?></div>
    </div>
    <!-- footer -->
    <?php include "../../components/Footer/_Footer.php" ?>
</body>

</html>