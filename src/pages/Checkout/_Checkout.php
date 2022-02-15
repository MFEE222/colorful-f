<!DOCTYPE html>
<html lang="en">

<?php include "../../components/Head/_Head.php"; ?>

<body>

    <!-- navbar -->
    <?php include "../../components/Navbar/_Navbar.php" ?>

    <!-- breadcrumb -->
    <?php include "../../components/Breadcrumb/_Breadcrumb.php" ?>
    <!-- content  -->
    <div class="content">
        <div class="container-fluid">
            <h1 style="text-align:center;" class="mb-3">CHECK OUT</h1>
            <!-- flex container -->
            <?php include "../../components/CheckoutCard/_CheckoutCard.php" ?>
            <?php include "../../components/PaymentMethodCard/_PaymentMethodCard.php" ?>
        </div>
    </div>

    <!-- footer -->
    <?php include "../../components/Footer/_Footer.php" ?>
</body>

</html>