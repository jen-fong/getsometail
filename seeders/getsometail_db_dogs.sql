-- MySQL dump 10.13  Distrib 5.7.12, for Win32 (AMD64)
--
-- Host: localhost    Database: getsometail_db
-- ------------------------------------------------------
-- Server version	5.7.13-log

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `dogs`
--

DROP TABLE IF EXISTS `dogs`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `dogs` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `breed` varchar(255) DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `GirlId` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `GirlId` (`GirlId`),
  CONSTRAINT `dogs_ibfk_1` FOREIGN KEY (`GirlId`) REFERENCES `girls` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=37 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `dogs`
--

LOCK TABLES `dogs` WRITE;
/*!40000 ALTER TABLE `dogs` DISABLE KEYS */;
INSERT INTO `dogs` VALUES (1,'Poodle','poodle','2016-09-04 02:54:35','2016-09-04 02:54:35',4),(2,'Dalmatian','dalmatian','2016-09-04 02:54:35','2016-09-04 02:54:35',4),(3,'Pomeranian','pomeranian','2016-09-04 02:54:35','2016-09-04 02:54:35',4),(4,'Australian Cattle Dog','australianCattleDog','2016-09-04 02:54:35','2016-09-04 02:54:35',6),(5,'Border Collie','borderCollie','2016-09-04 02:54:35','2016-09-04 02:54:35',6),(6,'shetland sheepdog','shetlandSheepdog','2016-09-04 02:54:35','2016-09-04 02:54:35',6),(7,'King Charles','kingCharles','2016-09-04 02:54:35','2016-09-04 02:54:35',8),(8,'Patch Beagle','patchBeagle','2016-09-04 02:54:35','2016-09-04 02:54:35',8),(9,'yorkshire terrier','yorkshireTerrier','2016-09-04 02:54:35','2016-09-04 02:54:35',8),(10,'Chihuahua','chihuahua','2016-09-04 02:54:35','2016-09-04 02:54:35',3),(11,'Maltese','maltese','2016-09-04 02:54:35','2016-09-04 02:54:35',3),(12,'French Bulldog','frenchBulldog','2016-09-04 02:54:35','2016-09-04 02:54:35',3),(13,'Dachshund','Dachshund','2016-09-04 02:54:35','2016-09-04 02:54:35',10),(14,'Great Dane','greatDane','2016-09-04 02:54:35','2016-09-04 02:54:35',10),(15,'Shih Tzu','shihTzu','2016-09-04 02:54:35','2016-09-04 02:54:35',10),(16,'Pit bull','pitbull','2016-09-04 02:54:35','2016-09-04 02:54:35',7),(17,'Pug','pug','2016-09-04 02:54:35','2016-09-04 02:54:35',7),(18,'Chocolate Labrador','chocolateLabador','2016-09-04 02:54:35','2016-09-04 02:54:35',7),(19,'Basset Hound','bassetHound','2016-09-04 02:54:35','2016-09-04 02:54:35',1),(20,'Bull Terrier','bullTerrier','2016-09-04 02:54:35','2016-09-04 02:54:35',1),(21,'Weimaraner','weimaraner','2016-09-04 02:54:35','2016-09-04 02:54:35',1),(22,'Foxhound','englishFoxhound','2016-09-04 02:54:35','2016-09-04 02:54:35',9),(23,'St Bernard','stBernard','2016-09-04 02:54:35','2016-09-04 02:54:35',9),(24,'German Wirehaired Pointer','germanWirehairedPointer','2016-09-04 02:54:35','2016-09-04 02:54:35',9),(25,'Bulldog','bulldog','2016-09-04 02:54:35','2016-09-04 02:54:35',5),(26,'Boxer','boxer','2016-09-04 02:54:35','2016-09-04 02:54:35',5),(27,'German Shepard Dog','germanShepard','2016-09-04 02:54:35','2016-09-04 02:54:35',5),(28,'Doberman Pinscher','dobermanpinscher','2016-09-04 02:54:35','2016-09-04 02:54:35',12),(29,'Rottweiler','Rottweiler','2016-09-04 02:54:35','2016-09-04 02:54:35',12),(30,'Mastiff','mastiff','2016-09-04 02:54:35','2016-09-04 02:54:35',12),(31,'Schnauzer','Schnauzer','2016-09-04 02:54:35','2016-09-04 02:54:35',11),(32,'Chow Chow','chowChow','2016-09-04 02:54:35','2016-09-04 02:54:35',11),(33,'Shiba Inu','shibaInu','2016-09-04 02:54:35','2016-09-04 02:54:35',11),(34,'Golden Retriever','goldenRetriever','2016-09-04 02:54:35','2016-09-04 02:54:35',2),(35,'Siberian Husky','siberianHusky','2016-09-04 02:54:35','2016-09-04 02:54:35',2),(36,'Greyhound','greyhound','2016-09-04 02:54:35','2016-09-04 02:54:35',2);
/*!40000 ALTER TABLE `dogs` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2016-09-04  0:38:30
