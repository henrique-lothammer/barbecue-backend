-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Feb 14, 2021 at 04:18 PM
-- Server version: 10.4.16-MariaDB
-- PHP Version: 7.4.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `barbecue`
--

-- --------------------------------------------------------

--
-- Table structure for table `barbecues`
--

CREATE TABLE `barbecues` (
  `id` int(11) NOT NULL,
  `title` varchar(255) NOT NULL,
  `date` datetime NOT NULL,
  `suggested_budget` int(11) DEFAULT NULL,
  `suggested_budget_no_drink` int(11) DEFAULT NULL,
  `description` text DEFAULT NULL,
  `notes` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `barbecues`
--

INSERT INTO `barbecues` (`id`, `title`, `date`, `suggested_budget`, `suggested_budget_no_drink`, `description`, `notes`) VALUES
(40, 'Churras na casa da Nati', '2021-02-13 18:00:00', 30, 20, 'Churras com opções vegetarianas, quem não consumir carne pode contribuir só com 15. Cerveja e caipirinha pra quem quiser bebida.', 'Pode trazer os pets'),
(42, 'Níver do Gui', '2020-12-01 18:30:00', 20, 10, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eu congue metus. Phasellus ac ipsum magna. Nullam purus mauris, tincidunt id eros id, facilisis consequat leo. Aliquam nulla elit, rutrum eu risus nec, blandit varius turpis. Ut sit amet erat at lorem feugiat convallis et vel urna. Nullam eleifend, lacus nec venenatis sodales, lorem mi tincidunt orci, a bibendum erat justo quis dui. Pellentesque posuere tellus vitae neque pulvinar varius.', 'Pellentesque turpis erat, suscipit et velit et, malesuada dignissim libero. Fusce accumsan augue eget turpis porta, sollicitudin feugiat neque suscipit.');

-- --------------------------------------------------------

--
-- Table structure for table `barbecue_members`
--

CREATE TABLE `barbecue_members` (
  `id` int(11) NOT NULL,
  `barbecue_id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `budget` int(11) NOT NULL,
  `need_drink` tinyint(1) NOT NULL,
  `paid` tinyint(1) DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `barbecue_members`
--

INSERT INTO `barbecue_members` (`id`, `barbecue_id`, `name`, `budget`, `need_drink`, `paid`) VALUES
(46, 40, 'Natalia', 15, 0, 0),
(47, 40, 'Henrique', 25, 1, 0),
(48, 40, 'Jonas', 30, 1, 1),
(49, 40, 'Arthur', 30, 1, 1),
(50, 42, 'Alice', 20, 1, 0),
(51, 42, 'Beto', 20, 1, 0),
(52, 42, 'Diego B.', 20, 1, 0),
(53, 42, 'Diego P.', 10, 0, 0),
(54, 42, 'Fernando', 20, 1, 0),
(55, 42, 'Gabriel', 20, 1, 1),
(56, 42, 'Leonardo', 10, 0, 0),
(57, 42, 'Marcus J.', 20, 1, 0),
(58, 42, 'Michele', 20, 1, 0),
(59, 42, 'Paulo', 20, 1, 0),
(60, 42, 'Rafael S.', 20, 1, 0),
(61, 42, 'Ralf', 20, 1, 0),
(62, 42, 'Ruan', 20, 1, 1),
(63, 42, 'Thales', 20, 1, 0),
(64, 42, 'Wait', 20, 1, 0);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `barbecues`
--
ALTER TABLE `barbecues`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `barbecue_members`
--
ALTER TABLE `barbecue_members`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `barbecues`
--
ALTER TABLE `barbecues`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=44;

--
-- AUTO_INCREMENT for table `barbecue_members`
--
ALTER TABLE `barbecue_members`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=65;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
