-- MySQL dump 10.13  Distrib 8.3.0, for macos13.6 (arm64)
--
-- Host: sql3.freesqldatabase.com    Database: sql3720807
-- ------------------------------------------------------
-- Server version	5.5.54-0ubuntu0.12.04.1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `audio`
--

DROP TABLE IF EXISTS `audio`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `audio` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `filename` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=23 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `audio`
--

LOCK TABLES `audio` WRITE;
/*!40000 ALTER TABLE `audio` DISABLE KEYS */;
INSERT INTO `audio` VALUES (1,'i_am_happy_1.mp3'),(2,'i_am_happy_2.mp3'),(3,'i_am_happy_3.mp3'),(4,'dog_barks_1.mp3'),(5,'dog_barks_2.mp3'),(6,'dog_barks_3.mp3'),(7,'drink_anything_1.mp3'),(8,'drink_anything_2.mp3'),(9,'drink_anything_3.mp3'),(10,'drink_anything_4.mp3'),(11,'eat_dinner_1.mp3'),(12,'eat_dinner_2.mp3'),(13,'eat_dinner_3.mp3'),(14,'eat_dinner_4.mp3'),(15,'snows_a_lot_1.mp3'),(16,'snows_a_lot_2.mp3'),(17,'snows_a_lot_3.mp3'),(18,'come_to_me.mp3'),(19,'Like_the_rockweeds.mp3'),(20,'empty_and_trembling.mp3'),(21,'Now_when_dying.mp3'),(22,'we_re_learning_how_to_scan.mp3');
/*!40000 ALTER TABLE `audio` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `awards`
--

DROP TABLE IF EXISTS `awards`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `awards` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `award_image_url` varchar(255) DEFAULT NULL,
  `award_title` varchar(255) DEFAULT NULL,
  `issue_date` datetime NOT NULL,
  `course_id` bigint(20) NOT NULL,
  `module_id` bigint(20) NOT NULL,
  `user_id` bigint(20) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `FKhmce97j8bdkhkoxds38k5yqa3` (`course_id`),
  KEY `FKqd7ph7uuk5rxif4wsa48uryja` (`module_id`),
  KEY `FKrft316v3utr25vtx8jgfpffjv` (`user_id`),
  CONSTRAINT `FKhmce97j8bdkhkoxds38k5yqa3` FOREIGN KEY (`course_id`) REFERENCES `courses` (`id`),
  CONSTRAINT `FKqd7ph7uuk5rxif4wsa48uryja` FOREIGN KEY (`module_id`) REFERENCES `modules` (`id`),
  CONSTRAINT `FKrft316v3utr25vtx8jgfpffjv` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `awards`
--

LOCK TABLES `awards` WRITE;
/*!40000 ALTER TABLE `awards` DISABLE KEYS */;
INSERT INTO `awards` VALUES (1,'example.png','example','2024-06-27 17:49:29',1,2,1);
/*!40000 ALTER TABLE `awards` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `courses`
--

DROP TABLE IF EXISTS `courses`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `courses` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `created_at` datetime NOT NULL,
  `description` text,
  `name` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `courses`
--

LOCK TABLES `courses` WRITE;
/*!40000 ALTER TABLE `courses` DISABLE KEYS */;
INSERT INTO `courses` VALUES (1,'2024-07-09 11:25:05','Learning Scansion of Meter','How to Scan a Poem?');
/*!40000 ALTER TABLE `courses` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `modules`
--

DROP TABLE IF EXISTS `modules`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `modules` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `created_at` datetime NOT NULL,
  `description` text,
  `name` varchar(255) NOT NULL,
  `course_id` bigint(20) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `FK8qnnp812q1jd38fx7mxrhpw9` (`course_id`),
  CONSTRAINT `FK8qnnp812q1jd38fx7mxrhpw9` FOREIGN KEY (`course_id`) REFERENCES `courses` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `modules`
--

LOCK TABLES `modules` WRITE;
/*!40000 ALTER TABLE `modules` DISABLE KEYS */;
INSERT INTO `modules` VALUES (1,'2024-06-08 18:50:02','Basic Introduction of Scansion and Syllables','Introduction to Scansion and Syllables',1),(2,'2024-06-11 10:38:06','Understanding how to identify Stressed and Unstressed Syllables','Stressed and Unstressed Syllables',1),(3,'2024-06-11 10:38:06','Understanding the different types of scansion, meter and feet','Tools and Techniques',1),(4,'2024-06-11 10:38:06','Scanning Complete Poems using the three steps of Scansion','Scanning Poems',1);
/*!40000 ALTER TABLE `modules` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `otp`
--

DROP TABLE IF EXISTS `otp`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `otp` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `expiration_time` datetime NOT NULL,
  `otp` varchar(255) NOT NULL,
  `phone_number` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `otp`
--

LOCK TABLES `otp` WRITE;
/*!40000 ALTER TABLE `otp` DISABLE KEYS */;
/*!40000 ALTER TABLE `otp` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `password_reset_tokens`
--

DROP TABLE IF EXISTS `password_reset_tokens`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `password_reset_tokens` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `expiration_time` datetime NOT NULL,
  `token` varchar(255) NOT NULL,
  `user_id` bigint(20) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `UK_71lqwbwtklmljk3qlsugr1mig` (`token`(191)),
  KEY `FKk3ndxg5xp6v7wd4gjyusp15gq` (`user_id`),
  CONSTRAINT `FKk3ndxg5xp6v7wd4gjyusp15gq` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `password_reset_tokens`
--

LOCK TABLES `password_reset_tokens` WRITE;
/*!40000 ALTER TABLE `password_reset_tokens` DISABLE KEYS */;
/*!40000 ALTER TABLE `password_reset_tokens` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `poem`
--

DROP TABLE IF EXISTS `poem`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `poem` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `text` text NOT NULL,
  `audio_id` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK54dcsv38ms3j0qfwce0dwf7id` (`audio_id`),
  CONSTRAINT `FK54dcsv38ms3j0qfwce0dwf7id` FOREIGN KEY (`audio_id`) REFERENCES `audio` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `poem`
--

LOCK TABLES `poem` WRITE;
/*!40000 ALTER TABLE `poem` DISABLE KEYS */;
INSERT INTO `poem` VALUES (1,'Now when dying grasses veil\nearth from the sky in one last pale\nwave as autumn dies to bring\nwinter back then the spring\nwe who die ourselves can peel\nback another kind of veil',21),(2,'We\'re learning how to scan\nwith wands and cups and edges\nwith ear and hand and eye\nuntil the pattern\'s clear',22),(3,'Come to me brother when weary\nCome when thy lonely heart swells\nI’ll guide thy footsteps and lead thee\nDown where the Dream Woman dwells',18),(4,'Like the rockweeds You rock in your undersea coil,\nHalf way between water and earth, I divide.\nMay I rock in your mystery, speaking and whole\non your softness and hardness and wildness I ride!',19),(5,'Empty and trembling, haloed by absences,\nwhooshings, invisible leave-takings, finishes,\nimages, closure: departures so gracefully\npractice their gestures that when they do happen',20);
/*!40000 ALTER TABLE `poem` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `questions`
--

DROP TABLE IF EXISTS `questions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `questions` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `correct_answer` text,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `drag_drop_syllables_correct` text,
  `drag_drop_syllables_options` text,
  `drag_drop_word` varchar(255) DEFAULT NULL,
  `edges` varchar(255) DEFAULT NULL,
  `explanation` varchar(255) DEFAULT NULL,
  `options` text,
  `pattern` varchar(255) DEFAULT NULL,
  `question_text` varchar(255) DEFAULT NULL,
  `syllable` varchar(255) DEFAULT NULL,
  `type` enum('DRAG_DROP','MCQ','STRESS_CHECKER_POEM','STRESS_CHECKER_WORDS') NOT NULL,
  `audio_id` bigint(20) DEFAULT NULL,
  `module_id` bigint(20) NOT NULL,
  `poem_id` bigint(20) DEFAULT NULL,
  `poem_syllables` text,
  PRIMARY KEY (`id`),
  KEY `FKe8b02agvs99ttk58eqiy68a6a` (`audio_id`),
  KEY `FK57g8y0vw5fbki91hridp5aohq` (`module_id`),
  KEY `FKc9m1k639yyc9ll4ee9ndqwebk` (`poem_id`),
  CONSTRAINT `FK57g8y0vw5fbki91hridp5aohq` FOREIGN KEY (`module_id`) REFERENCES `modules` (`id`),
  CONSTRAINT `FKc9m1k639yyc9ll4ee9ndqwebk` FOREIGN KEY (`poem_id`) REFERENCES `poem` (`id`),
  CONSTRAINT `FKe8b02agvs99ttk58eqiy68a6a` FOREIGN KEY (`audio_id`) REFERENCES `audio` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=80 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `questions`
--

LOCK TABLES `questions` WRITE;
/*!40000 ALTER TABLE `questions` DISABLE KEYS */;
INSERT INTO `questions` VALUES (1,'[\"It translates the wordless language of meter into awareness\"]','2024-06-17 05:33:00',NULL,NULL,NULL,NULL,'Scansion translates the wordless, eloquent language of meter into our awareness, helping us understand the rhythm and flow of the poem.','[\"It simplifies the poem\'s vocabulary\", \"It highlights the rhyme scheme\", \"It translates the wordless language of meter into awareness\", \"It identifies the poem\'s theme\"]',NULL,'Why is scansion considered the best method to understand a poem\'s meter?',NULL,'MCQ',NULL,1,NULL,NULL),(2,'[\"rhythm\"]','2024-06-17 05:33:00',NULL,NULL,NULL,NULL,'The text states that the innermost reality of a poem is a matter of rhythm—the unfolding of movement through time.','[\"rhyme scheme\", \"rhythm\", \"theme\", \"vocabulary\"]',NULL,'What is the innermost reality of a poem according to the text?',NULL,'MCQ',NULL,1,NULL,NULL),(3,'[\"By understanding the lengths, weights, and rhythms of its syllables\"]','2024-06-17 05:33:00',NULL,NULL,NULL,NULL,'The text explains that a poem expresses its sublime truths through the physical sensations of the lengths, weights, and rhythms of its syllables, which scansion helps us experience.','[\"By simplifying the language\", \"By highlighting alliteration\", \"By understanding the lengths, weights, and rhythms of its syllables\", \"By identifying the theme\"]',NULL,'How does scansion help us experience a poem\'s sublime truths?',NULL,'MCQ',NULL,1,NULL,NULL),(4,'[\"Sensations of length, weight, and rhythm\"]','2024-06-17 05:33:00',NULL,NULL,NULL,NULL,'The text compares the sublime truths of a poem to physical sensations of length, weight, and rhythm in our bodies.','[\"Sensations of length, weight, and rhythm\", \"Sensations of color and sound\", \"Sensations of taste and smell\", \"Sensations of heat and cold\"]',NULL,'What physical sensations are poems compared to in the text?',NULL,'MCQ',NULL,1,NULL,NULL),(5,'[\"A part of a word that contains a single vowel sound and is pronounced as a unit\"]','2024-06-17 05:33:01',NULL,NULL,NULL,NULL,'A syllable is defined as a part of a word that contains a single vowel sound and is pronounced as a unit, as stated in the text.','[\"A part of a word that contains a single vowel sound and is pronounced as a unit\", \"A part of a word that contains multiple consonant sounds\", \"A part of a word that is always stressed\", \"A part of a word that contains no vowel sounds\"]',NULL,'What is a syllable?',NULL,'MCQ',NULL,1,NULL,NULL),(6,'3','2024-06-17 05:33:01',NULL,NULL,NULL,NULL,'The word \"UMBRELLA\" has three syllables: um-brel-la.','[2, 3, 4, 5]',NULL,'Count the number of syllables in \"UMBRELLA\".',NULL,'MCQ',NULL,1,NULL,NULL),(7,'2','2024-06-17 05:33:01',NULL,NULL,NULL,NULL,'The word \"COOKIE\" has two syllables: cook-ie.','[1, 2, 3, 4]',NULL,'Count the number of syllables in \"COOKIE\".',NULL,'MCQ',NULL,1,NULL,NULL),(8,'3','2024-06-17 05:33:01',NULL,NULL,NULL,NULL,'The word \"ALPHABET\" has three syllables: al-pha-bet.','[2, 3, 4, 5]',NULL,'Count the number of syllables in \"ALPHABET\".',NULL,'MCQ',NULL,1,NULL,NULL),(9,'1','2024-06-17 05:33:01',NULL,NULL,NULL,NULL,'The word \"TWELVE\" has only one syllable.','[1, 2, 3, 4]',NULL,'Count the number of syllables in \"TWELVE\".',NULL,'MCQ',NULL,1,NULL,NULL),(10,'3','2024-06-17 05:33:02',NULL,NULL,NULL,NULL,'The word \"COMPUTER\" has three syllables: com-pu-ter.','[2, 3, 4, 5]',NULL,'Count the number of syllables in \"COMPUTER\".',NULL,'MCQ',NULL,1,NULL,NULL),(11,NULL,'2024-06-17 05:33:13','[\"vol\", \"ca\", \"nic\"]','[\"volca\", \"can\", \"vol\", \"ca\", \"nic\", \"olca\"]','VOLCANIC',NULL,'The correct syllable breakdown for \"VOLCANIC\" is \"vol\" + \"ca\" + \"nic\".',NULL,NULL,NULL,NULL,'DRAG_DROP',NULL,1,NULL,NULL),(12,NULL,'2024-06-17 05:33:13','[\"e\", \"ras\", \"er\"]','[\"e\", \"ras\", \"er\", \"eras\", \"aser\", \"raser\"]','ERASER',NULL,'The correct syllable breakdown for \"ERASER\" is \"e\" + \"ras\" + \"er\".',NULL,NULL,NULL,NULL,'DRAG_DROP',NULL,1,NULL,NULL),(13,NULL,'2024-06-17 05:33:13','[\"ham\", \"bur\", \"ger\"]','[\"burger\", \"hambu\", \"ham\", \"bur\", \"ger\", \"mbur\"]','HAMBURGER',NULL,'The correct syllable breakdown for \"HAMBURGER\" is \"ham\" + \"bur\" + \"ger\".',NULL,NULL,NULL,NULL,'DRAG_DROP',NULL,1,NULL,NULL),(14,NULL,'2024-06-17 05:33:13','[\"el\", \"e\", \"phant\"]','[\"ephant\", \"el\", \"e\", \"phant\", \"lephant\", \"elep\"]','ELEPHANT',NULL,'The correct syllable breakdown for \"ELEPHANT\" is \"el\" + \"e\" + \"phant\".',NULL,NULL,NULL,NULL,'DRAG_DROP',NULL,1,NULL,NULL),(15,NULL,'2024-06-17 05:33:13','[\"har\", \"mo\", \"ny\"]','[\"har\", \"mo\", \"ny\", \"rmony\", \"harmo\", \"mony\"]','HARMONY',NULL,'The correct syllable breakdown for \"HARMONY\" is \"har\" + \"mo\" + \"ny\".',NULL,NULL,NULL,NULL,'DRAG_DROP',NULL,1,NULL,NULL),(16,'[\"A syllable that is more heavily stressed or emphasized than others\"]','2024-06-17 05:33:14',NULL,NULL,NULL,NULL,'An accent is defined as a syllable that is more heavily stressed or emphasized than the other syllables in a word.','[\"A mark used to denote a long vowel\", \"A syllable that is more heavily stressed or emphasized than others\", \"A syllable that is always at the beginning of a word\", \"A syllable that contains no consonant sounds\"]',NULL,'What is the definition of an accent in the context of English words?',NULL,'MCQ',NULL,2,NULL,NULL),(17,'[\"Loudness, length, and pitch\"]','2024-06-17 05:37:53',NULL,NULL,NULL,NULL,'The components of accent are loudness, length, and pitch.','[\"Volume, speed, and clarity\", \"Loudness, length, and pitch\", \"Rhythm, rhyme, and meter\", \"Spelling, grammar, and punctuation\"]',NULL,'What are the three components of accent?',NULL,'MCQ',NULL,2,NULL,NULL),(18,'[\"It is the first step in learning to scan poetry\"]','2024-06-17 05:37:58',NULL,NULL,NULL,NULL,'Recognizing and distinguishing accent is crucial because it is the first step in learning to scan English-language poetry.','[\"It helps in understanding the rhyme scheme\", \"It is the first step in learning to scan poetry\", \"It simplifies the vocabulary\", \"It identifies the poem\'s theme\"]',NULL,'Why is recognizing and distinguishing accent important for scanning English-language poetry?',NULL,'MCQ',NULL,2,NULL,NULL),(19,'[\"Reading a list of heteronyms aloud and noticing the accent components\"]','2024-06-17 05:33:44',NULL,NULL,NULL,NULL,'A good way to explore how accent works is to read a list of heteronyms aloud and notice which aspects (loudness, length, and pitch) of each syllable your meter antenna picks up.','[\"Writing poems\", \"Listening to music\", \"Reading a list of heteronyms aloud and noticing the accent components\", \"Practicing tongue twisters\"]',NULL,'What is a good way to explore how accent works for you?',NULL,'MCQ',NULL,2,NULL,NULL),(20,'[\"Exaggerating the difference between the syllables by whispering one syllable softly and shouting the other syllable loudly\"]','2024-06-17 05:33:44',NULL,NULL,NULL,NULL,'The Reverse Exaggeration Method involves exaggerating the difference between syllables by whispering one syllable softly and shouting the other syllable loudly to hear which one sounds more natural.','[\"Whispering the entire word softly\", \"Shouting the entire word loudly\", \"Exaggerating the difference between the syllables by whispering one syllable softly and shouting the other syllable loudly\", \"Saying the word slowly\"]',NULL,'What is the Reverse Exaggeration Method for hearing accent?',NULL,'MCQ',NULL,2,NULL,NULL),(21,'[\"Both syllables\"]','2024-06-17 05:33:44',NULL,NULL,NULL,NULL,'In the Reverse Exaggeration Method, the process needs to be repeated twice, first whispering one syllable and shouting the other, and then repeating it in the opposite way.','[\"The first syllable\", \"The second syllable\", \"Both syllables\", \"Neither syllable\"]',NULL,'In the Reverse Exaggeration Method, which syllable is whispered softly when determining the accent in the word \"because\"?',NULL,'MCQ',NULL,2,NULL,NULL),(22,'[\"Imagine shouting the word or phrase to a friend across a large room and embed the word in a natural sentence\"]','2024-06-17 05:33:44',NULL,NULL,NULL,NULL,'The Shout-across-the-Room Method involves imagining shouting the word or phrase to a friend across a large room and embedding the word in a natural sentence to determine the accented syllable.','[\"Whisper the word to a friend\", \"Imagine shouting the word or phrase to a friend across a large room and embed the word in a natural sentence\", \"Write the word down\", \"Sing the word aloud\"]',NULL,'What does the Shout-across-the-Room Method suggest you do to determine the accented syllable?',NULL,'MCQ',NULL,2,NULL,NULL),(23,'[\"MON\"]','2024-06-17 05:33:44',NULL,NULL,NULL,NULL,'The accented or stressed syllable in \"MONITOR\" is \"MON.\"','[\"MON\", \"I\", \"TOR\", \"None of the above\"]',NULL,'Identify the accented or stressed syllable in \"MONITOR\".',NULL,'MCQ',NULL,2,NULL,NULL),(24,'[\"PUR\"]','2024-06-17 05:33:44',NULL,NULL,NULL,NULL,'The accented or stressed syllable in \"PURCHASE\" is \"PUR.\"','[\"PUR\", \"CHASE\", \"Both\", \"None of the above\"]',NULL,'Identify the accented or stressed syllable in \"PURCHASE\"',NULL,'MCQ',NULL,2,NULL,NULL),(25,'[\"IS\"]','2024-06-17 05:33:44',NULL,NULL,NULL,NULL,'The accented or stressed syllable in \"ISSUE\" is \"IS\".','[\"IS\", \"SUE\", \"Both\", \"None of the above\"]',NULL,'Identify the accented or stressed syllable in \"ISSUE\".',NULL,'MCQ',NULL,2,NULL,NULL),(26,'[\"FOL\"]','2024-06-17 05:33:44',NULL,NULL,NULL,NULL,'The accented or stressed syllable in \"FOLLOW\" is \"FOL\".','[\"FOL\", \"LOW\", \"Both\", \"None of the above\"]',NULL,'Identify the accented or stressed syllable in \"FOLLOW\".',NULL,'MCQ',NULL,2,NULL,NULL),(27,'[\"RE\"]','2024-06-17 05:33:44',NULL,NULL,NULL,NULL,'The accented or stressed syllable in \"RECENTLY\" is \"RE\".','[\"RE\", \"CENT\", \"LY\", \"None of the above\"]',NULL,'Identify the accented or stressed syllable in \"RECENTLY\".',NULL,'MCQ',NULL,2,NULL,NULL),(28,'[\"BLE\"]','2024-06-17 05:33:44',NULL,NULL,NULL,NULL,'The unstressed syllable in \"TABLE\" is \"BLE.\"','[\"BLE\", \"TA\", \"Both\", \"None of the above\"]',NULL,'Identify the unstressed syllable in \"TABLE\".',NULL,'MCQ',NULL,2,NULL,NULL),(29,'[\"SURE\"]','2024-06-17 05:33:44',NULL,NULL,NULL,NULL,'The unstressed syllable in \"MEASURE\" is \"SURE.\"','[\"MEA\", \"SURE\", \"Both\", \"None of the above\"]',NULL,'Identify the unstressed syllable in \"MEASURE\".',NULL,'MCQ',NULL,2,NULL,NULL),(30,'[\"SIC\"]','2024-06-17 05:33:45',NULL,NULL,NULL,NULL,'The unstressed syllable in \"MUSIC\" is \"SIC.\"','[\"SIC\", \"MU\", \"Both\", \"None of the above\"]',NULL,'Identify the unstressed syllable in \"MUSIC\".',NULL,'MCQ',NULL,2,NULL,NULL),(31,'[\"TOR\"]','2024-06-17 05:33:45',NULL,NULL,NULL,NULL,'The unstressed syllable in \"DOCTOR\" is \"TOR.\"','[\"DOC\", \"TOR\", \"Both\", \"None of the above\"]',NULL,'Identify the unstressed syllable in \"DOCTOR\".',NULL,'MCQ',NULL,2,NULL,NULL),(32,'[\"CIL\"]','2024-06-17 05:33:45',NULL,NULL,NULL,NULL,'The unstressed syllable in \"PENCIL\" is \"CIL.\"','[\"PEN\", \"CIL\", \"Both\", \"None of the above\"]',NULL,'Identify the unstressed syllable in \"PENCIL\".',NULL,'MCQ',NULL,2,NULL,NULL),(33,'[\"WAND\"]','2024-06-17 05:33:45',NULL,NULL,NULL,NULL,'In scansion, a stressed syllable is represented by a WAND.','[\"CUP\", \"WAND\", \"breve\", \"nonictus\"]',NULL,'What symbol is used to represent a stressed syllable in scansion?',NULL,'MCQ',NULL,3,NULL,NULL),(34,'[\"CUP\"]','2024-06-17 05:33:45',NULL,NULL,NULL,NULL,'In scansion, an unstressed syllable is represented by a CUP.','[\"CUP\", \"WAND\", \"accent\", \"ictus\"]',NULL,'What symbol is used to represent an unstressed syllable in scansion?',NULL,'MCQ',NULL,3,NULL,NULL),(35,NULL,'2024-06-17 05:38:09',NULL,NULL,NULL,NULL,'pro\' is the unstressed syllable and \'pose\' is the stressed syllable.',NULL,'u/','PROPOSE','[pro,pose]','STRESS_CHECKER_WORDS',NULL,3,NULL,NULL),(36,NULL,'2024-06-17 05:38:09',NULL,NULL,NULL,NULL,'an\' is the stressed syllable, \'i\' and \'mal\' are unstressed syllables.',NULL,'/uu','ANIMAL','[an, i, mal]','STRESS_CHECKER_WORDS',NULL,3,NULL,NULL),(37,NULL,'2024-06-17 05:38:10',NULL,NULL,NULL,NULL,'at\' is the unstressed syllable, and \'tack\' is a stressed syllable.',NULL,'u/','ATTACK','[at, tack]','STRESS_CHECKER_WORDS',NULL,3,NULL,NULL),(38,NULL,'2024-06-17 05:38:10',NULL,NULL,NULL,NULL,'hav\' is a stressed syllable, \'be\' and \'ior\' are the unstressed syllables.',NULL,'u/u','BEHAVIOR','[be, hav, ior]','STRESS_CHECKER_WORDS',NULL,3,NULL,NULL),(39,NULL,'2024-06-17 05:38:11',NULL,NULL,NULL,NULL,'den\' is the only stressed syllable in \'identity\'.',NULL,'u/uu','IDENTITY','[i,den,ti,ty]','STRESS_CHECKER_WORDS',NULL,3,NULL,NULL),(40,'[\"Sentence syntax, idiomatic phrases, and other demands of language\"]','2024-06-17 05:38:28',NULL,NULL,NULL,NULL,'Phrasal accent results from sentence syntax, idiomatic phrases, and other demands of language for which speakers share a common understanding.','[\"Rhyming words\", \"Sentence syntax, idiomatic phrases, and other demands of language\", \"The number of syllables in a word\", \"The length of the sentence\"]',NULL,'What results in phrasal accent?',NULL,'MCQ',NULL,3,NULL,NULL),(41,'[\"They are based on common understanding and usage rather than formal rules\"]','2024-06-17 05:38:28',NULL,NULL,NULL,NULL,'Phrasal accent patterns are based on common understanding and usage, making them informal and not typically included in dictionaries.','[\"They are too complex\", \"They are based on common understanding and usage rather than formal rules\", \"They change too frequently\", \"They are not important\"]',NULL,'Why can\'t phrasal accent patterns be found in dictionaries?',NULL,'MCQ',NULL,3,NULL,NULL),(42,NULL,'2024-06-17 05:38:28',NULL,NULL,NULL,NULL,'break\' and \'leg\' are stressed syllables, \'a\' is unstressed syllable.',NULL,'/u/','BREAK A LEG','[break, a, leg]','STRESS_CHECKER_WORDS',NULL,3,NULL,NULL),(43,NULL,'2024-06-17 05:38:28',NULL,NULL,NULL,NULL,'arm\' and \'leg\' are the stressed syllables.',NULL,'u/uu/','AN ARM AND A LEG','[an, arm, and, a, leg]','STRESS_CHECKER_WORDS',NULL,3,NULL,NULL),(44,NULL,'2024-06-17 05:38:28',NULL,NULL,NULL,NULL,'hit\' and \'sack\' are the stressed syllables.',NULL,'/u/','HIT THE SACK','[hit, the, sack]','STRESS_CHECKER_WORDS',NULL,3,NULL,NULL),(45,NULL,'2024-06-17 05:38:29',NULL,NULL,NULL,NULL,'not\' and \'fast\' are the stressed syllables.',NULL,'/u/','NOT SO FAST','[not, so, fast]','STRESS_CHECKER_WORDS',NULL,3,NULL,NULL),(46,NULL,'2024-06-17 05:38:29',NULL,NULL,NULL,NULL,'once\', \'blue\' and \'moon\' are the stressed syllables.',NULL,'/uu//','ONCE IN A BLUE MOON','[once, in, a, blue, moon]','STRESS_CHECKER_WORDS',NULL,3,NULL,NULL),(47,'[\"The way people emphasize certain syllables when speaking to express emotions or thoughts\"]','2024-06-17 05:38:29',NULL,NULL,NULL,NULL,'Performative accent refers to the way people emphasize certain syllables when speaking to express their emotions or thoughts.','[\"The emphasis on specific syllables in written text\", \"The way people emphasize certain syllables when speaking to express emotions or thoughts\", \"The use of different words to convey emotions\", \"The natural rhythm of language\"]',NULL,'What is performative accent?',NULL,'MCQ',NULL,3,NULL,NULL),(48,'[\"By allowing the speaker to emphasize different syllables to change meaning\"]','2024-06-17 05:38:29',NULL,NULL,NULL,NULL,'Performative accent demonstrates flexibility by allowing the speaker to emphasize different syllables, which can change the meaning of the phrase.','[\"By allowing the speaker to emphasize different syllables to change meaning\", \"By using only one fixed syllable for emphasis\", \"By emphasizing syllables based on spelling\", \"By avoiding the use of monosyllabic words\"]',NULL,'How does performative accent demonstrate flexibility?',NULL,'MCQ',NULL,3,NULL,NULL),(49,'[\"It allows the poet to affect the reader’s vocal expression and meaning\"]','2024-06-17 05:38:29',NULL,NULL,NULL,NULL,'In metrical poetry, performative accent allows the poet to influence the reader’s vocal expression and meaning, getting inside another person’s vocal apparatus to use performative stress in a certain way.','[\"It makes the poetry rhyme\", \"It simplifies the vocabulary\", \"It allows the poet to affect the reader’s vocal expression and meaning\", \"It shortens the lines\"]',NULL,'What is the significance of performative accent in metrical poetry?',NULL,'MCQ',NULL,3,NULL,NULL),(50,NULL,'2024-06-18 07:57:36',NULL,NULL,NULL,NULL,'\'I\' is stressed while speaking \'I am happy\' in this audio',NULL,'/uuu','I AM HAPPY','[I, am, hap, py]','STRESS_CHECKER_WORDS',1,3,NULL,NULL),(51,NULL,'2024-06-18 07:57:36',NULL,NULL,NULL,NULL,'\'am\' is stressed while speaking \'I am happy\' in this audio',NULL,'u/uu','I AM HAPPY','[I, am, hap, py]','STRESS_CHECKER_WORDS',2,3,NULL,NULL),(52,NULL,'2024-06-18 07:57:36',NULL,NULL,NULL,NULL,'Only \'hap\' is stressed while speaking \'I am happy\' in this audio',NULL,'uu/u','I AM HAPPY','[I, am, hap, py]','STRESS_CHECKER_WORDS',3,3,NULL,NULL),(53,NULL,'2024-06-18 07:57:36',NULL,NULL,NULL,NULL,'\'His\' is stressed performatively while speaking \'His dog barks loudly\' in this audio',NULL,'/uuuu','HIS DOG BARKS LOUDLY','[his, dog, barks, loud, ly]','STRESS_CHECKER_WORDS',4,3,NULL,NULL),(54,NULL,'2024-06-18 07:57:36',NULL,NULL,NULL,NULL,'\'dog\' is stressed performatively while speaking \'His dog barks loudly\' in this audio',NULL,'u/uuu','HIS DOG BARKS LOUDLY','[his, dog, barks, loud, ly]','STRESS_CHECKER_WORDS',5,3,NULL,NULL),(55,NULL,'2024-06-18 07:57:36',NULL,NULL,NULL,NULL,'\'barks\' is stressed performatively while speaking \'His dog barks loudly\' in this audio',NULL,'uu/uu','HIS DOG BARKS LOUDLY','[his, dog, barks, loud, ly]','STRESS_CHECKER_WORDS',6,3,NULL,NULL),(56,NULL,'2024-06-18 07:57:36',NULL,NULL,NULL,NULL,'\'I\' is stressed performatively while speaking \'I don\'t want to drink anything\' in this audio',NULL,'/uuuuuuu','I DON\'T WANT TO DRINK ANYTHING','[I, don\'t, want, to, drink, a, ny, thing]','STRESS_CHECKER_WORDS',7,3,NULL,NULL),(57,NULL,'2024-06-18 07:57:36',NULL,NULL,NULL,NULL,'\'want\' is stressed performatively while speaking \'I don\'t want to drink anything\' in this audio',NULL,'uu/uuuuu','I DON\'T WANT TO DRINK ANYTHING','[I, don\'t, want, to, drink, a, ny, thing]','STRESS_CHECKER_WORDS',8,3,NULL,NULL),(58,NULL,'2024-06-18 07:57:36',NULL,NULL,NULL,NULL,'\'drink\' is stressed performatively while speaking \'I don\'t want to drink anything\' in this audio',NULL,'uuuu/uuu','I DON\'T WANT TO DRINK ANYTHING','[I, don\'t, want, to, drink, a, ny, thing]','STRESS_CHECKER_WORDS',9,3,NULL,NULL),(59,NULL,'2024-06-18 07:57:36',NULL,NULL,NULL,NULL,'\'a\' and \'ny\' are stressed performatively while speaking \'I don\'t want to drink anything\' in this audio',NULL,'uuuuuu//u','I DON\'T WANT TO DRINK ANYTHING','[I, don\'t, want, to, drink, a, ny, thing]','STRESS_CHECKER_WORDS',10,3,NULL,NULL),(60,NULL,'2024-06-18 07:57:36',NULL,NULL,NULL,NULL,'\'We\' is stressed performatively while speaking \'We always eat dinner together\' in this audio',NULL,'/uuuuuuuu','WE ALWAYS EAT DINNER TOGETHER','[we, al, ways, eat, din, ner, to, geth, er]','STRESS_CHECKER_WORDS',11,3,NULL,NULL),(61,NULL,'2024-06-18 07:57:36',NULL,NULL,NULL,NULL,'\'al\' is stressed performatively while speaking \'We always eat dinner together\' in this audio',NULL,'u/uuuuuuu','WE ALWAYS EAT DINNER TOGETHER','[we, al, ways, eat, din, ner, to, geth, er]','STRESS_CHECKER_WORDS',12,3,NULL,NULL),(62,NULL,'2024-06-18 07:57:36',NULL,NULL,NULL,NULL,'\'din\' is stressed performatively while speaking \'We always eat dinner together\' in this audio',NULL,'uuuu/uuuu','WE ALWAYS EAT DINNER TOGETHER','[we, al, ways, eat, din, ner, to, geth, er]','STRESS_CHECKER_WORDS',13,3,NULL,NULL),(63,NULL,'2024-06-18 07:57:36',NULL,NULL,NULL,NULL,'\'gets\' is stressed performatively while speaking \'We always eat dinner together\' in this audio',NULL,'uuuuuuu/u','WE ALWAYS EAT DINNER TOGETHER','[we, al, ways, eat, din, ner, to, geth, er]','STRESS_CHECKER_WORDS',14,3,NULL,NULL),(64,NULL,'2024-06-18 07:57:36',NULL,NULL,NULL,NULL,'\'snows\' is stressed performatively while speaking \'It snows a lot in winter\' in this audio',NULL,'u/uuuuu','IT SNOWS A LOT IN WINTER','[it, snows, a, lot, in, win, ter]','STRESS_CHECKER_WORDS',15,3,NULL,NULL),(65,NULL,'2024-06-18 07:57:36',NULL,NULL,NULL,NULL,'\'lot\' is stressed performatively while speaking \'It snows a lot in winter\' in this audio',NULL,'uuu/uuu','IT SNOWS A LOT IN WINTER','[it, snows, a, lot, in, win, ter]','STRESS_CHECKER_WORDS',16,3,NULL,NULL),(66,NULL,'2024-06-18 07:57:36',NULL,NULL,NULL,NULL,'\'win\' is stressed performatively while speaking \'It snows a lot in winter\' in this audio',NULL,'uuuuu/u','IT SNOWS A LOT IN WINTER','[it, snows, a, lot, in, win, ter]','STRESS_CHECKER_WORDS',17,3,NULL,NULL),(67,NULL,'2024-06-18 08:09:19',NULL,NULL,NULL,NULL,'Listen to the audio and repeat the lines thrice to find the stressed syllables.',NULL,'u/u/u/\nu/u/u/\nu/u/u/\nu/u/u/',NULL,NULL,'STRESS_CHECKER_POEM',NULL,4,2,'[[\"We\'re\", \"lear\", \"ning\", \"how\", \"to\", \"scan\"], [\"with\", \"wands\", \"and\", \"cups\", \"and\", \"edges\"], [\"with\", \"ear\", \"and\", \"hand\", \"and\", \"eye\"], [\"un\", \"til\", \"the\", \"part\", \"terns\", \"clear\"]]'),(68,'[\"u/\"]','2024-06-18 08:14:47',NULL,NULL,NULL,NULL,'u/ is the repeating pattern in the lines.','[\"u/\", \"/u\", \"uu/\", \"/uu\"]',NULL,'What was the repeating pattern in the last poem?',NULL,'MCQ',NULL,4,NULL,NULL),(69,'[\"Basic repeating patterns that move the poem along\"]','2024-06-18 08:12:16',NULL,NULL,NULL,NULL,'Metrical feet are basic repeating patterns in poetry that help to structure and move the poem along.','[\"The rhyming words in a line\", \"Basic repeating patterns that move the poem along\", \"The punctuation marks in a poem\", \"The number of lines in a stanza\"]',NULL,'What are metrical feet in poetry?',NULL,'MCQ',NULL,4,NULL,NULL),(70,'[\"To separate different metrical feet within a line\"]','2024-06-18 08:12:16',NULL,NULL,NULL,NULL,'Marking the boundaries with an edge separates different metrical feet within a line to maintain the structure of the poem.','[\"To indicate the end of a poem\", \"To separate different metrical feet within a line\", \"To highlight rhyming words\", \"To indicate pauses in reading\"]',NULL,'What is the purpose of marking the boundaries between metrical feet with an edge?',NULL,'MCQ',NULL,4,NULL,NULL),(71,'[\"Put the edge right down through the middle of the word\"]','2024-06-18 08:12:16',NULL,NULL,NULL,NULL,'If the foot changes in the middle of a word while scanning by hand, you should put the edge right down through the middle of the word.','[\"Put the edge right down through the middle of the word\", \"Ignore the change\", \"Start a new line\", \"Use a different symbol\"]',NULL,'What should you do if the foot changes in the middle of a word while scanning by hand?',NULL,'MCQ',NULL,4,NULL,NULL),(72,'[\"Trochee\"]','2024-06-18 08:12:16',NULL,NULL,NULL,NULL,'The pattern /u represents a trochee.','[\"Trochee\", \"Iamb\", \"Dactyl\", \"Anapest\"]',NULL,'Which metrical foot is represented by the pattern /u?',NULL,'MCQ',NULL,4,NULL,NULL),(73,'[\"Iamb\"]','2024-06-18 08:12:16',NULL,NULL,NULL,NULL,'The pattern u/ represents an iamb.','[\"Trochee\", \"Iamb\", \"Dactyl\", \"Anapest\"]',NULL,'Which metrical foot is represented by the pattern u/?',NULL,'MCQ',NULL,4,NULL,NULL),(74,'[\"Dactyl\"]','2024-06-18 08:12:16',NULL,NULL,NULL,NULL,'The pattern /uu represents a dactyl.','[\"Trochee\", \"Iamb\", \"Dactyl\", \"Anapest\"]',NULL,'Which metrical foot is represented by the pattern /uu?',NULL,'MCQ',NULL,4,NULL,NULL),(75,'[\"Anapest\"]','2024-06-18 08:12:20',NULL,NULL,NULL,NULL,'The pattern uu/ represents an anapest.','[\"Trochee\", \"Iamb\", \"Dactyl\", \"Anapest\"]',NULL,'Which metrical foot is represented by the pattern uu/?',NULL,'MCQ',NULL,4,NULL,NULL),(76,NULL,'2024-06-18 08:22:39',NULL,NULL,NULL,'--|--|--|\n-|--|--|\n--|--|--|\n--|--|\n--|--|--|\n--|--|--|','Listen to the audio and repeat the lines thrice to find the stressed syllables, unstressed syllables and mark the edges.',NULL,'/u/u/u/\n/uu/uu/u\n/u/u/u/\n/u/uu/\n/u/u/u/\n/u/u/u/',NULL,NULL,'STRESS_CHECKER_POEM',NULL,4,1,'[[\"Now\", \"when\", \"dy\", \"ing\", \"gras\", \"ses\", \"veil\"], [\"earth\", \"from\", \"the\", \"sky\", \"in\", \"one\", \"last\", \"pale\"], [\"wave\", \"as\", \"aut\", \"umn\", \"dies\", \"to\", \"bring\"], [\"win\", \"ter\", \"back\", \"then\", \"the\", \"spring\"], [\"we\", \"who\", \"die\", \"our\", \"selves\", \"can\", \"peel\"], [\"back\", \"an\", \"o\", \"ther\", \"kind\", \"of\", \"veil\"]]'),(77,NULL,'2024-06-18 08:22:40',NULL,NULL,NULL,'--|--|--|\n-|--|--|\n--|--|--|\n--|--|--|','Listen to the audio and repeat the lines thrice to find the stressed syllables, unstressed syllables and mark the edges.',NULL,'uu//u/uu/uu/\nu/uu/uu/uu/\nuu/uu/uu/uu/\nuu/uu/uu/uu/',NULL,NULL,'STRESS_CHECKER_POEM',NULL,4,4,'[[\"Like\", \"the\", \"rock\", \"weeds\", \"You\", \"rock\", \"in\", \"your\", \"un\", \"der\", \"sea\", \"coil\"], [\"Half\", \"way\", \"be\", \"tween\", \"wa\", \"ter\", \"and\", \"earth\", \"I\", \"di\", \"vide\"], [\"May\", \"I\", \"rock\", \"in\", \"your\", \"my\", \"ste\", \"ry\", \"speak\", \"ing\", \"and\", \"whole\"], [\"on\", \"your\", \"soft\", \"ness\", \"and\", \"hard\", \"ness\", \"and\", \"wild\", \"ness\", \"I\", \"ride\"]]'),(78,NULL,'2024-06-18 08:22:40',NULL,NULL,NULL,'--|-|--|\n--|--|--|\n--|--|--|\n--|--|--|','Listen to the audio and repeat the lines thrice to find the stressed syllables, unstressed syllables and mark the edges.',NULL,'uu/uu/uu/uu/\nuu/uu/uu/uu/\nuu/uu/uu/uu/\nuu/uu/uu/uu/',NULL,NULL,'STRESS_CHECKER_POEM',NULL,4,5,'[[\"Emp\", \"ty\", \"and\", \"trem\", \"bling,\", \"hal\", \"oed\", \"by\", \"ab\", \"sen\", \"ces,\"], [\"whoo\", \"shings,\", \"in\", \"vi\", \"si\", \"ble\", \"leave-\", \"tak\", \"ings,\", \"fi\", \"ni\", \"shes\"], [\"im\", \"ag\", \"is,\", \"clo\", \"sure:\", \"de\", \"par\", \"tures\", \"so\", \"grace\", \"ful\", \"ly\"], [\"prac\", \"tice\", \"their\", \"ges\", \"tures\", \"that\", \"when\", \"they\", \"do\", \"hap\", \"pen\"]]'),(79,NULL,'2024-06-18 08:22:40',NULL,NULL,NULL,'--|--|\n--|--|\n--|--|\n--|--|','Listen to the audio and repeat the lines thrice to find the stressed syllables, unstressed syllables and mark the edges.',NULL,'/uu/u//u\n/uu/u//\n//u/uu/u\n/uu//u/',NULL,NULL,'STRESS_CHECKER_POEM',NULL,4,3,'[[\"Come\", \"to\", \"me\", \"bro\", \"ther\", \"when\", \"wea\", \"ry\"], [\"Come\", \"when\", \"thy\", \"lone\", \"ly\", \"heart\", \"swells\"], [\"I’ll\", \"guide\", \"thy\", \"foot\", \"steps\", \"and\", \"lead\", \"thee\"], [\"Down\", \"where\", \"the\", \"Dream\", \"Wo\", \"man\", \"dwells\"]]');
/*!40000 ALTER TABLE `questions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_courses`
--

DROP TABLE IF EXISTS `user_courses`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user_courses` (
  `course_id` bigint(20) NOT NULL,
  `user_id` bigint(20) NOT NULL,
  PRIMARY KEY (`course_id`,`user_id`),
  KEY `FK5i2mwg17kvpk92fy6cdii93da` (`user_id`),
  CONSTRAINT `FK5i2mwg17kvpk92fy6cdii93da` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`),
  CONSTRAINT `FKb84hga2qpwc4vv44lmyb8mwux` FOREIGN KEY (`course_id`) REFERENCES `courses` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_courses`
--

LOCK TABLES `user_courses` WRITE;
/*!40000 ALTER TABLE `user_courses` DISABLE KEYS */;
INSERT INTO `user_courses` VALUES (1,1),(2,1),(3,1),(4,1),(5,1);
/*!40000 ALTER TABLE `user_courses` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_progress`
--

DROP TABLE IF EXISTS `user_progress`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user_progress` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `module_completed` bit(1) DEFAULT NULL,
  `questions_completed` int(11) DEFAULT NULL,
  `total_questions` int(11) DEFAULT NULL,
  `course_id` bigint(20) NOT NULL,
  `module_id` bigint(20) NOT NULL,
  `user_id` bigint(20) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `FKrw7lu7e9na119d0g9s6cu3n3k` (`course_id`),
  KEY `FKkaa32cigsepoxak0jdxyix6ix` (`module_id`),
  KEY `FKrt37sneeps21829cuqetjm5ye` (`user_id`),
  CONSTRAINT `FKkaa32cigsepoxak0jdxyix6ix` FOREIGN KEY (`module_id`) REFERENCES `modules` (`id`),
  CONSTRAINT `FKrt37sneeps21829cuqetjm5ye` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`),
  CONSTRAINT `FKrw7lu7e9na119d0g9s6cu3n3k` FOREIGN KEY (`course_id`) REFERENCES `courses` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_progress`
--

LOCK TABLES `user_progress` WRITE;
/*!40000 ALTER TABLE `user_progress` DISABLE KEYS */;
INSERT INTO `user_progress` VALUES (6,'2024-06-17 09:46:29',NULL,43,17,1,2,1),(7,'2024-06-17 09:46:59',NULL,141,34,1,3,1),(8,'2024-06-18 08:26:05',NULL,64,13,1,4,1),(9,'2024-06-20 12:42:30',NULL,28,15,1,1,1),(11,'2024-07-09 08:52:21',_binary '\0',18,15,1,1,5),(12,'2024-07-09 08:52:21',_binary '\0',17,17,1,2,5),(13,'2024-07-09 08:52:21',_binary '\0',50,34,1,3,5),(14,'2024-07-09 08:52:21',_binary '\0',13,13,1,4,5);
/*!40000 ALTER TABLE `user_progress` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `created_at` datetime NOT NULL,
  `email` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `phone_number` varchar(255) DEFAULT NULL,
  `phone_number_verified` tinyint(1) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  UNIQUE KEY `UK_6dotkott2kjsp8vw4d0m25fb7` (`email`(191)),
  UNIQUE KEY `UK_9q63snka3mdh91as4io72espi` (`phone_number`(191)),
  UNIQUE KEY `email` (`email`(191)),
  UNIQUE KEY `phone_number` (`phone_number`(191))
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'2024-06-08 16:46:33','user@example.com','$2a$10$WhHi3cGzGe.QTu9cSkb9rujGK8.Pajl2tTynwdPU3Zh1RNf3t39uK',NULL,0),(2,'2024-07-03 17:01:22','testuser@example.com','$2a$10$rUZzTpOFE3iI7XAPgZaMluM6Y7UKb2T0Y/BbTMy2hMPa6hkHu0R7m',NULL,0),(3,'2024-07-03 17:05:16','Sanya@monica.in','$2a$10$nf/UCwE5SjHRhIIRbExU.eC/JxikieBHHur0kRw.a6T17f1lP.SQW',NULL,0),(4,'2024-07-04 12:02:40',NULL,NULL,'919711472692',1),(5,'2024-07-09 11:15:12','User1@example.com','$2a$10$WiAppdZO78bVUwl5q9SI/.nP6Xpif63qKppLzaM3WCFkroH2TuIjm',NULL,0);
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-07-19 11:18:41
