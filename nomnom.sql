-- phpMyAdmin SQL Dump
-- version 4.8.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 19, 2019 at 04:48 PM
-- Server version: 10.1.37-MariaDB
-- PHP Version: 7.3.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `nomnom`
--

-- --------------------------------------------------------

--
-- Table structure for table `chef`
--

CREATE TABLE `chef` (
  `chef_id` int(11) NOT NULL,
  `chef_name` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `cuisine`
--

CREATE TABLE `cuisine` (
  `cuisine_id` int(11) NOT NULL,
  `name` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `ingredient`
--

CREATE TABLE `ingredient` (
  `ingredient_id` int(11) NOT NULL,
  `name` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `kitchen`
--

CREATE TABLE `kitchen` (
  `kitchen_id` int(11) NOT NULL,
  `chef_id` int(11) NOT NULL,
  `resto_id` int(11) NOT NULL,
  `meal_type` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `meal`
--

CREATE TABLE `meal` (
  `meal_id` int(11) NOT NULL,
  `restaurant_id` int(11) NOT NULL,
  `meal_type_id` int(11) DEFAULT NULL COMMENT 'kategori makanan',
  `meal_name` varchar(40) NOT NULL,
  `prep_time` time DEFAULT NULL,
  `description` text,
  `photo` text,
  `price` int(11) NOT NULL,
  `status_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `meal`
--

INSERT INTO `meal` (`meal_id`, `restaurant_id`, `meal_type_id`, `meal_name`, `prep_time`, `description`, `photo`, `price`, `status_id`) VALUES
(1, 1, 1, 'Pepperoni Pizza', '00:15:00', 'Featuring our traditional crispy crust, is topped with a blend of mozzarella and cheddar cheese, zesty pepperoni slices and a rich tomato sauce', NULL, 50000, 1),
(2, 1, 1, 'Super Supreme', '00:20:00', 'What\'s on a supreme pizza? Besides the standard sauce and shredded mozzarella cheese, a supreme pizza usually has on it: sliced pepperoni. cooked, Italian sausage.', NULL, 60000, 1),
(3, 1, 1, 'American Favorite', '00:20:00', 'With chicken luncheon, bacon, beef & beef burgers, mushrooms, pineapple, red & green peppers, mozzarella cheese and special PHD sauce.', NULL, 65000, 1),
(4, 1, 2, 'Pepperoni Cheese Fusilli', '00:15:00', 'Fusilli dengan saus keju cheddar, pepperoni dan peterseli.', NULL, 55000, 1),
(5, 1, 2, 'Beef Lasagna', '00:15:00', 'Kombinasi pasta dengan daging cincang, krim pasta, keju mozzarella dan peterseli.', NULL, 45000, 1),
(6, 1, 3, 'Melon Lemonade', '00:05:00', 'Melon flavoured drink with basil seeds and melon jelly.', NULL, 12000, 1),
(7, 1, 3, 'Sea Salt Caramel', '00:05:00', 'Sea salt caramel flavoured drink.', NULL, 18000, 1);

-- --------------------------------------------------------

--
-- Table structure for table `meal_ingredient`
--

CREATE TABLE `meal_ingredient` (
  `id` int(11) NOT NULL,
  `meal_id` int(11) NOT NULL,
  `ingredient_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `meal_nutrition`
--

CREATE TABLE `meal_nutrition` (
  `id` int(11) NOT NULL,
  `meal_id` int(11) NOT NULL,
  `nutrition_id` int(11) NOT NULL,
  `amount` float NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `meal_status`
--

CREATE TABLE `meal_status` (
  `status_id` int(11) NOT NULL,
  `status_meal` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `meal_status`
--

INSERT INTO `meal_status` (`status_id`, `status_meal`) VALUES
(0, 'Empty / Kosong'),
(1, 'Ready / Ada');

-- --------------------------------------------------------

--
-- Table structure for table `meal_type`
--

CREATE TABLE `meal_type` (
  `restaurant_id` int(11) NOT NULL,
  `meal_type_id` int(11) NOT NULL,
  `type_name` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `meal_type`
--

INSERT INTO `meal_type` (`restaurant_id`, `meal_type_id`, `type_name`) VALUES
(1, 1, 'Pizza'),
(1, 2, 'Pasta'),
(1, 3, 'Drink');

-- --------------------------------------------------------

--
-- Table structure for table `nutrition`
--

CREATE TABLE `nutrition` (
  `nutrition_id` int(11) NOT NULL,
  `name` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `order`
--

CREATE TABLE `order` (
  `order_id` int(11) NOT NULL,
  `resto_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `table` int(11) NOT NULL,
  `total_price` int(11) NOT NULL,
  `order_time` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `serve_time` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `order_meal`
--

CREATE TABLE `order_meal` (
  `id` int(11) NOT NULL,
  `meal_id` int(11) NOT NULL,
  `order_id` int(11) NOT NULL,
  `status_id` int(11) NOT NULL COMMENT 'status orderan terhadap makanan'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `order_status`
--

CREATE TABLE `order_status` (
  `status_order_id` int(11) NOT NULL,
  `status_order` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `payment`
--

CREATE TABLE `payment` (
  `payment_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `order_id` int(11) NOT NULL,
  `method_id` int(11) NOT NULL COMMENT 'metode pembayaran',
  `payment_time` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT 'auto add ime',
  `amount` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `pay_method`
--

CREATE TABLE `pay_method` (
  `method_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `account` varchar(30) NOT NULL,
  `id_pay` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `queue`
--

CREATE TABLE `queue` (
  `queue_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `restaurant_id` int(11) NOT NULL,
  `queue_number` int(11) NOT NULL,
  `enter_time` time NOT NULL,
  `exit_time` time NOT NULL,
  `exit_status` int(11) NOT NULL COMMENT '1:cancel, 2:done, 3:delay'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `restaurant`
--

CREATE TABLE `restaurant` (
  `restaurant_id` int(11) NOT NULL,
  `name` varchar(30) NOT NULL,
  `phone_number` varchar(20) DEFAULT NULL,
  `photo` text,
  `location` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `restaurant`
--

INSERT INTO `restaurant` (`restaurant_id`, `name`, `phone_number`, `photo`, `location`) VALUES
(1, 'Mario Pizza', '0217505002', NULL, 'Jl. Jalan Denganmu'),
(2, 'Maria Bakery', '0217505005', NULL, 'Jl. Bersama Dia'),
(3, 'Marina Pizza', '0217505060', NULL, 'Jl. Takdir');

-- --------------------------------------------------------

--
-- Table structure for table `restaurant_time`
--

CREATE TABLE `restaurant_time` (
  `id` int(11) NOT NULL,
  `restaurant_id` int(11) NOT NULL,
  `time_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `timeoperation`
--

CREATE TABLE `timeoperation` (
  `time_id` int(11) NOT NULL,
  `day` varchar(15) NOT NULL,
  `time` time NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `user_id` int(11) NOT NULL,
  `name` varchar(30) NOT NULL,
  `phone_number` varchar(20) NOT NULL,
  `email` varchar(30) NOT NULL,
  `username` varchar(20) NOT NULL,
  `password` varchar(64) NOT NULL,
  `photo` text,
  `address` text,
  `location_point` text,
  `priviledge` int(11) NOT NULL COMMENT '1:superuser, 2:customer, 3:employee',
  `activation_status` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`user_id`, `name`, `phone_number`, `email`, `username`, `password`, `photo`, `address`, `location_point`, `priviledge`, `activation_status`) VALUES
(1, 'Ian Joseph', '+6281513127900', 'ian.joseph@ui.ac.id', 'ian.joseph', 'ian123', NULL, 'Jakarta', NULL, 2, 0),
(16, 'ian', '123', 'ian@email.com', 'ian', 'ian123', NULL, 'Depok', NULL, 0, 0),
(17, 'nama', '90909', 'email@email', 'user', 'pass', NULL, 'kolong', NULL, 0, 0),
(18, 'abc', 'abc', 'abc', 'abc', 'abc', NULL, 'abc', NULL, 0, 0),
(19, 'nama', '90909', 'email@email', 'user1', 'pass', NULL, 'kolong', NULL, 0, 0),
(20, '', '', '', 'user 2', 'ian123', NULL, '', NULL, 0, 0),
(21, '', '', '', 'user2', 'ian123', NULL, '', NULL, 0, 0),
(22, '', '', '', 'user3', 'ian123', NULL, '', NULL, 0, 0),
(23, '', '', '', 'abcs', 'abcs', NULL, '', NULL, 0, 0),
(24, 'Achmad Kripton', '123', 'achmad@email.com', 'achmad', 'kripton', NULL, 'Depok', NULL, 0, 0),
(25, 'Muhammad Fadli', '123', 'muhammad.fadli@gmail.com', 'fadli', 'fadli123', NULL, 'Depok', NULL, 0, 0),
(26, 'Athina Maria Angelica', '081219916138', 'athinaangelica@gmail.com', 'athinama', 'athinaaa', NULL, 'Depok', NULL, 0, 0);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `chef`
--
ALTER TABLE `chef`
  ADD PRIMARY KEY (`chef_id`);

--
-- Indexes for table `cuisine`
--
ALTER TABLE `cuisine`
  ADD PRIMARY KEY (`cuisine_id`);

--
-- Indexes for table `ingredient`
--
ALTER TABLE `ingredient`
  ADD PRIMARY KEY (`ingredient_id`);

--
-- Indexes for table `kitchen`
--
ALTER TABLE `kitchen`
  ADD PRIMARY KEY (`kitchen_id`);

--
-- Indexes for table `meal`
--
ALTER TABLE `meal`
  ADD PRIMARY KEY (`meal_id`);

--
-- Indexes for table `meal_ingredient`
--
ALTER TABLE `meal_ingredient`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `meal_nutrition`
--
ALTER TABLE `meal_nutrition`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `meal_type`
--
ALTER TABLE `meal_type`
  ADD PRIMARY KEY (`meal_type_id`);

--
-- Indexes for table `nutrition`
--
ALTER TABLE `nutrition`
  ADD PRIMARY KEY (`nutrition_id`);

--
-- Indexes for table `order`
--
ALTER TABLE `order`
  ADD PRIMARY KEY (`order_id`);

--
-- Indexes for table `order_meal`
--
ALTER TABLE `order_meal`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `order_status`
--
ALTER TABLE `order_status`
  ADD PRIMARY KEY (`status_order_id`);

--
-- Indexes for table `payment`
--
ALTER TABLE `payment`
  ADD PRIMARY KEY (`payment_id`);

--
-- Indexes for table `pay_method`
--
ALTER TABLE `pay_method`
  ADD PRIMARY KEY (`id_pay`);

--
-- Indexes for table `queue`
--
ALTER TABLE `queue`
  ADD PRIMARY KEY (`queue_id`);

--
-- Indexes for table `restaurant`
--
ALTER TABLE `restaurant`
  ADD PRIMARY KEY (`restaurant_id`);

--
-- Indexes for table `restaurant_time`
--
ALTER TABLE `restaurant_time`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `timeoperation`
--
ALTER TABLE `timeoperation`
  ADD PRIMARY KEY (`time_id`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`user_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `chef`
--
ALTER TABLE `chef`
  MODIFY `chef_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `cuisine`
--
ALTER TABLE `cuisine`
  MODIFY `cuisine_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `ingredient`
--
ALTER TABLE `ingredient`
  MODIFY `ingredient_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `kitchen`
--
ALTER TABLE `kitchen`
  MODIFY `kitchen_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `meal`
--
ALTER TABLE `meal`
  MODIFY `meal_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `meal_ingredient`
--
ALTER TABLE `meal_ingredient`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `meal_nutrition`
--
ALTER TABLE `meal_nutrition`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `meal_type`
--
ALTER TABLE `meal_type`
  MODIFY `meal_type_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `nutrition`
--
ALTER TABLE `nutrition`
  MODIFY `nutrition_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `order`
--
ALTER TABLE `order`
  MODIFY `order_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `order_meal`
--
ALTER TABLE `order_meal`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `order_status`
--
ALTER TABLE `order_status`
  MODIFY `status_order_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `payment`
--
ALTER TABLE `payment`
  MODIFY `payment_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `pay_method`
--
ALTER TABLE `pay_method`
  MODIFY `id_pay` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `queue`
--
ALTER TABLE `queue`
  MODIFY `queue_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `restaurant`
--
ALTER TABLE `restaurant`
  MODIFY `restaurant_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `restaurant_time`
--
ALTER TABLE `restaurant_time`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `timeoperation`
--
ALTER TABLE `timeoperation`
  MODIFY `time_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `user_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=27;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
