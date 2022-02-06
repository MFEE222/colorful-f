<!DOCTYPE html>
<html lang="en">

<?php include "../../components/Head/_Head.php"; ?>

<body>

    <!-- navbar -->
    <?php include "../../components/Navbar/_Navbar.php" ?>

    <!-- breadcrumb -->
    <?php include "../../components/Breadcrumb/_Breadcrumb.php" ?>

    <!-- content  -->

    <div class="container content">
        <!-- flex container -->
        <div class="row">
            <!-- member sidebar left / xs: col-12 / md: col-2 -->
            <?php include "../../components/MemberSideBarLeft/_MemberSideBarLeft.php" ?>

            <!-- member main / xs: col-12 / md: col-10 or col-8 -->
            <?php include "../../components/MemberPaymentMain/_MemberPaymentMain.php" ?>

            <!-- member sidebar right / xs: col-12 / md: col-2 -->
            <?php include "../../components/MemberSideBarRight/_MemberSideBarRight.php" ?>
        </div>
    </div>


    <!-- footer -->
    <?php include "../../components/Footer/_Footer.php" ?>
</body>

</html>