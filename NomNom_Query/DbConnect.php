<?php

	class DbConnect{
		private $conn;

		function __construct(){
		}

		function connect(){
			include_once dirName(__FILE__).'\Constants.php';
			$this -> conn = new mysqli(DB_HOST, DB_USER, DB_PASS, DB_NAME);

			if(mysqli_connect_errno()){
				echo "Failed to connect with database".mysqli_connect_err();
			}

			return $this -> conn;
		}
	}
?>