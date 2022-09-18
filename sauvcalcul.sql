-- phpMyAdmin SQL Dump
-- version 4.1.14
-- http://www.phpmyadmin.net
--
-- Client :  127.0.0.1
-- Généré le :  Dim 18 Septembre 2022 à 15:29
-- Version du serveur :  5.6.17
-- Version de PHP :  5.5.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Base de données :  `calculator9000bdd`
--

-- --------------------------------------------------------

--
-- Structure de la table `sauvcalcul`
--

CREATE TABLE IF NOT EXISTS `sauvcalcul` (
  `num_calc` int(11) NOT NULL AUTO_INCREMENT,
  `Calcul` varchar(100) NOT NULL,
  `Resultat` varchar(100) NOT NULL,
  PRIMARY KEY (`num_calc`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=116 ;

--
-- Contenu de la table `sauvcalcul`
--

INSERT INTO `sauvcalcul` (`num_calc`, `Calcul`, `Resultat`) VALUES
(103, '67*60', '4020'),
(104, '2*2', '4'),
(105, '7*7', '49'),
(106, '3/3', '1'),
(107, '6*6', '36'),
(109, '3*3', '9'),
(110, '3*3', '9'),
(111, '2*2', '4'),
(112, '6*3', '18'),
(113, '7*0', '0'),
(114, '7*7', '49'),
(115, '3*3', '9');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
