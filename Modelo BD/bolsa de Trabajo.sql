-- phpMyAdmin SQL Dump
-- version 4.5.4.1deb2ubuntu2
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Apr 17, 2017 at 10:44 PM
-- Server version: 5.7.17-0ubuntu0.16.04.1
-- PHP Version: 7.0.15-0ubuntu0.16.04.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `empleo`
--
CREATE DATABASE IF NOT EXISTS `empleo` DEFAULT CHARACTER SET latin1 COLLATE latin1_swedish_ci;
USE `empleo`;

-- --------------------------------------------------------

--
-- Table structure for table `Empresa`
--

DROP TABLE IF EXISTS `Empresa`;
CREATE TABLE `Empresa` (
  `id` int(11) NOT NULL,
  `cif` varchar(512) NOT NULL,
  `nombre` varchar(512) NOT NULL,
  `direccion` varchar(512) DEFAULT NULL,
  `email` varchar(512) NOT NULL,
  `localidad` varchar(512) NOT NULL,
  `idprovincia` int(11) DEFAULT NULL,
  `logo` varchar(512) DEFAULT NULL,
  `telefono` varchar(512) NOT NULL,
  `url` varchar(512) DEFAULT NULL,
  `fax` varchar(512) DEFAULT NULL,
  `n_empleados` int(11) DEFAULT NULL,
  `idsector` varchar(512) DEFAULT NULL,
  `userId` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `Inscrito`
--

DROP TABLE IF EXISTS `Inscrito`;
CREATE TABLE `Inscrito` (
  `id` int(11) NOT NULL,
  `userId` int(11) DEFAULT NULL,
  `ofertaId` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `Oferta`
--

DROP TABLE IF EXISTS `Oferta`;
CREATE TABLE `Oferta` (
  `id` int(11) NOT NULL,
  `puesto` varchar(512) NOT NULL,
  `vacantes` int(11) NOT NULL,
  `descripcion` varchar(512) NOT NULL,
  `experiencia` varchar(512) NOT NULL,
  `idprovincia` int(11) NOT NULL,
  `localidad` varchar(512) NOT NULL,
  `condiciones` varchar(512) DEFAULT NULL,
  `duracion_meses` int(11) NOT NULL,
  `otras_consideraciones` varchar(512) DEFAULT NULL,
  `created_at` datetime NOT NULL,
  `fecha_caducidad` datetime NOT NULL,
  `cerrada` tinyint(1) DEFAULT NULL,
  `ofertante` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `Usuario`
--

DROP TABLE IF EXISTS `Usuario`;
CREATE TABLE `Usuario` (
  `id` int(11) NOT NULL,
  `nombre` varchar(512) NOT NULL,
  `realm` varchar(512) DEFAULT NULL,
  `username` varchar(512) DEFAULT NULL,
  `password` varchar(512) NOT NULL,
  `email` varchar(512) NOT NULL,
  `emailVerified` tinyint(1) DEFAULT NULL,
  `verificationToken` varchar(512) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `Empresa`
--
ALTER TABLE `Empresa`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `Inscrito`
--
ALTER TABLE `Inscrito`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `Oferta`
--
ALTER TABLE `Oferta`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `Usuario`
--
ALTER TABLE `Usuario`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `Empresa`
--
ALTER TABLE `Empresa`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT for table `Inscrito`
--
ALTER TABLE `Inscrito`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `Oferta`
--
ALTER TABLE `Oferta`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `Usuario`
--
ALTER TABLE `Usuario`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
