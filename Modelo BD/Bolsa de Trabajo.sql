-- phpMyAdmin SQL Dump
-- version 4.5.4.1deb2ubuntu2
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Jun 17, 2017 at 07:00 PM
-- Server version: 5.7.17-0ubuntu0.16.04.1
-- PHP Version: 7.0.18-0ubuntu0.16.04.1

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
-- Table structure for table `AccessToken`
--

DROP TABLE IF EXISTS `AccessToken`;
CREATE TABLE `AccessToken` (
  `id` varchar(255) NOT NULL,
  `ttl` int(11) DEFAULT NULL,
  `scopes` text,
  `created` datetime DEFAULT NULL,
  `userId` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `ACL`
--

DROP TABLE IF EXISTS `ACL`;
CREATE TABLE `ACL` (
  `id` int(11) NOT NULL,
  `model` varchar(512) DEFAULT NULL,
  `property` varchar(512) DEFAULT NULL,
  `accessType` varchar(512) DEFAULT NULL,
  `permission` varchar(512) DEFAULT NULL,
  `principalType` varchar(512) DEFAULT NULL,
  `principalId` varchar(512) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `Demandante`
--

DROP TABLE IF EXISTS `Demandante`;
CREATE TABLE `Demandante` (
  `id` int(11) NOT NULL,
  `nombre` varchar(512) DEFAULT NULL,
  `apellidos` varchar(512) DEFAULT NULL,
  `email` varchar(512) DEFAULT NULL,
  `dni` varchar(512) DEFAULT NULL,
  `fecha_nac` datetime DEFAULT NULL,
  `telefono` varchar(512) DEFAULT NULL,
  `sexo` varchar(512) DEFAULT NULL,
  `titulaciones` varchar(512) DEFAULT NULL,
  `experiencia` varchar(512) DEFAULT NULL,
  `idiomas` varchar(512) DEFAULT NULL,
  `conducir` varchar(512) DEFAULT NULL,
  `camion` varchar(512) DEFAULT NULL,
  `discapacitado` varchar(512) DEFAULT NULL,
  `usuarioId` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

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
  `provincia` varchar(512) NOT NULL,
  `telefono` varchar(512) NOT NULL,
  `url` varchar(512) DEFAULT NULL,
  `fax` varchar(512) DEFAULT NULL,
  `n_empleados` int(11) DEFAULT NULL,
  `idsector` varchar(512) DEFAULT NULL,
  `posicion` point DEFAULT NULL,
  `usuarioId` int(11) DEFAULT NULL
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
  `provincia` varchar(512) NOT NULL,
  `localidad` varchar(512) NOT NULL,
  `telefono` varchar(512) DEFAULT NULL,
  `salario_ofrecido` int(11) NOT NULL,
  `condiciones` varchar(512) DEFAULT NULL,
  `duracion_meses` int(11) NOT NULL,
  `otras_consideraciones` varchar(512) DEFAULT NULL,
  `created_at` datetime NOT NULL,
  `idsector` varchar(512) DEFAULT NULL,
  `fecha_caducidad` datetime NOT NULL,
  `cerrada` varchar(512) DEFAULT NULL,
  `empresaId` int(11) DEFAULT NULL,
  `demandanteId` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `Role`
--

DROP TABLE IF EXISTS `Role`;
CREATE TABLE `Role` (
  `id` int(11) NOT NULL,
  `name` varchar(512) NOT NULL,
  `description` varchar(512) DEFAULT NULL,
  `created` datetime DEFAULT NULL,
  `modified` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `RoleMapping`
--

DROP TABLE IF EXISTS `RoleMapping`;
CREATE TABLE `RoleMapping` (
  `id` int(11) NOT NULL,
  `principalType` varchar(512) DEFAULT NULL,
  `principalId` varchar(255) DEFAULT NULL,
  `roleId` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `User`
--

DROP TABLE IF EXISTS `User`;
CREATE TABLE `User` (
  `id` int(11) NOT NULL,
  `realm` varchar(512) DEFAULT NULL,
  `username` varchar(512) DEFAULT NULL,
  `password` varchar(512) NOT NULL,
  `email` varchar(512) NOT NULL,
  `emailVerified` tinyint(1) DEFAULT NULL,
  `verificationToken` varchar(512) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `Usuario`
--

DROP TABLE IF EXISTS `Usuario`;
CREATE TABLE `Usuario` (
  `id` int(11) NOT NULL,
  `nombre` varchar(512) NOT NULL,
  `apellidos` varchar(512) DEFAULT NULL,
  `dni` varchar(512) DEFAULT NULL,
  `fecha_nac` datetime DEFAULT NULL,
  `telefono` varchar(512) NOT NULL,
  `Empresa` tinyint(1) DEFAULT NULL,
  `admin` tinyint(1) DEFAULT NULL,
  `realm` varchar(512) DEFAULT NULL,
  `username` varchar(512) DEFAULT NULL,
  `password` varchar(512) NOT NULL,
  `email` varchar(512) NOT NULL,
  `emailVerified` tinyint(1) DEFAULT NULL,
  `verificationToken` varchar(512) DEFAULT NULL,
  `empresaId` int(11) DEFAULT NULL,
  `demandanteId` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `AccessToken`
--
ALTER TABLE `AccessToken`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `ACL`
--
ALTER TABLE `ACL`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `Demandante`
--
ALTER TABLE `Demandante`
  ADD PRIMARY KEY (`id`);

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
-- Indexes for table `Role`
--
ALTER TABLE `Role`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `RoleMapping`
--
ALTER TABLE `RoleMapping`
  ADD PRIMARY KEY (`id`),
  ADD KEY `principalId` (`principalId`);

--
-- Indexes for table `User`
--
ALTER TABLE `User`
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
-- AUTO_INCREMENT for table `ACL`
--
ALTER TABLE `ACL`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `Demandante`
--
ALTER TABLE `Demandante`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT for table `Empresa`
--
ALTER TABLE `Empresa`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
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
-- AUTO_INCREMENT for table `Role`
--
ALTER TABLE `Role`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT for table `RoleMapping`
--
ALTER TABLE `RoleMapping`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT for table `User`
--
ALTER TABLE `User`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `Usuario`
--
ALTER TABLE `Usuario`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
