<!DOCTYPE html>
<html lang="en">

<?php include "../../components/Head/_Head.php"; ?>

<head>
    <style>
    .container {
        display: flex | inline-flex;
        justify-content: center;
        align-items: center;
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
        <h1 style="text-align:center;" class="mb-3">CHECK OUT</h1>
        <!-- flex container -->
        <?php include "../../components/CheckoutCard/_CheckoutCard.php" ?>
        <?php include "../../components/PaymentMethodCard/_PaymentMethodCard.php" ?>
    </div>

    <!-- footer -->
    <?php include "../../components/Footer/_Footer.php" ?>
</body>

</html>