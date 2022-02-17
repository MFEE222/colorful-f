<!DOCTYPE html>
<html lang="en">

<!-- head -->
<?php include "../../components/Head/_Head.php" ?>

<body>

    <!-- navbar -->
    <?php include "../../components/Navbar/_Navbar.php" ?>

    <!-- breadcrumb -->
    <?php include "../../components/Breadcrumb/_Breadcrumb.php" ?>


    <div class="container content">
        <div class="row">
            <!-- member sidebar left -->
            <?php //include "../../components/MemberSideBarLeft/_MemberSideBarLeft.php" 
            ?>

            <!-- member main -->
            <?php //include "../../components/MemberProfileMain/_MemberProfileMain.php" 
            ?>

            <!-- member sidebar right -->
            <?php //include "../../components/MemebrSideBarRight/_MemberSideBarRight.php" 
            ?>
            <?php //include "../../components/ProductListMain/tmp.php" 
            ?>
        </div>
    </div>
    <?php include "../../components/ProductWishlistMain/_ProductWishlistMain.php" ?>

    <!-- footer -->
    <?php include "../../components/Footer/_Footer.php" ?>

    <!-- vanilla-tilt.js 特效
    <script type="text/javascript" src="../../../node_modules/vanilla-tilt/dist/vanilla-tilt.js"></script> -->
    <!-- <script type="text/javascript">
    VanillaTilt.init(document.querySelector(".card-border"), {
        max: 25,
        speed: 400
    });
    </script> -->
</body>

</html>