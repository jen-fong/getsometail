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
-- Table structure for table `girls`
--

DROP TABLE IF EXISTS `girls`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `girls` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `type` varchar(255) DEFAULT NULL,
  `href` varchar(255) DEFAULT NULL,
  `description` text,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `girls`
--

LOCK TABLES `girls` WRITE;
/*!40000 ALTER TABLE `girls` DISABLE KEYS */;
INSERT INTO `girls` VALUES (1,'beach bunny','beachBunny','Energetic, perky, chatty, athletic and driven. She is confident and charismatic and is always put together. She could kick your butt in both curling AND softball, yet her animated and lively personality makes her non-threatening. She will engage you despite yourself.','2016-09-04 02:54:35','2016-09-04 02:54:35'),(2,'biker babe','bikerBabe','Energetic, perky, chatty, athletic and driven. She is confident and charismatic and is always put together. She could kick your butt in both curling AND softball, yet her animated and lively personality makes her non-threatening. She will engage you despite yourself.','2016-09-04 02:54:35','2016-09-04 02:54:35'),(3,'blonde bombshell','blondeBombshell','Energetic, perky, chatty, athletic and driven. She is confident and charismatic and is always put together. She could kick your butt in both curling AND softball, yet her animated and lively personality makes her non-threatening. She will engage you despite yourself.','2016-09-04 02:54:35','2016-09-04 02:54:35'),(4,'bootylicious babe','bootylicious','Energetic, perky, chatty, athletic and driven. She is confident and charismatic and is always put together. She could kick your butt in both curling AND softball, yet her animated and lively personality makes her non-threatening. She will engage you despite yourself.','2016-09-04 02:54:35','2016-09-04 02:54:35'),(5,'daddy\'s girl','daddysGirl','Energetic, perky, chatty, athletic and driven. She is confident and charismatic and is always put together. She could kick your butt in both curling AND softball, yet her animated and lively personality makes her non-threatening. She will engage you despite yourself.','2016-09-04 02:54:35','2016-09-04 02:54:35'),(6,'fierce cowgirl','fierceCowgirl','Energetic, perky, chatty, athletic and driven. She is confident and charismatic and is always put together. She could kick your butt in both curling AND softball, yet her animated and lively personality makes her non-threatening. She will engage you despite yourself.','2016-09-04 02:54:35','2016-09-04 02:54:35'),(7,'fitness chic','fitnessChic','Energetic, perky, chatty, athletic and driven. She is confident and charismatic and is always put together. She could kick your butt in both curling AND softball, yet her animated and lively personality makes her non-threatening. She will engage you despite yourself.','2016-09-04 02:54:35','2016-09-04 02:54:35'),(8,'girl next door','girlNextDoor','Energetic, perky, chatty, athletic and driven. She is confident and charismatic and is always put together. She could kick your butt in both curling AND softball, yet her animated and lively personality makes her non-threatening. She will engage you despite yourself.','2016-09-04 02:54:35','2016-09-04 02:54:35'),(9,'ms. madison ave','madisonAve','Energetic, perky, chatty, athletic and driven. She is confident and charismatic and is always put together. She could kick your butt in both curling AND softball, yet her animated and lively personality makes her non-threatening. She will engage you despite yourself.','2016-09-04 02:54:35','2016-09-04 02:54:35'),(10,'natural beauty','naturalBeauty','Energetic, perky, chatty, athletic and driven. She is confident and charismatic and is always put together. She could kick your butt in both curling AND softball, yet her animated and lively personality makes her non-threatening. She will engage you despite yourself.','2016-09-04 02:54:35','2016-09-04 02:54:35'),(11,'sexy brunette','sexyBrunette','Energetic, perky, chatty, athletic and driven. She is confident and charismatic and is always put together. She could kick your butt in both curling AND softball, yet her animated and lively personality makes her non-threatening. She will engage you despite yourself.','2016-09-04 02:54:35','2016-09-04 02:54:35'),(12,'tattooed baby','tattooedBaby','Energetic, perky, chatty, athletic and driven. She is confident and charismatic and is always put together. She could kick your butt in both curling AND softball, yet her animated and lively personality makes her non-threatening. She will engage you despite yourself.','2016-09-04 02:54:35','2016-09-04 02:54:35');
/*!40000 ALTER TABLE `girls` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2016-09-04  0:38:29
