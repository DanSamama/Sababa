<?php
	session_start();

	if (isset($_POST['login']) && $_POST['login'] != '') {
		include_once("db.php");
		$sql = "SELECT * FROM sababa_tbl WHERE email = '$email' LIMIT 1";
		$query = mysqli_query($db, $sql) or die(mysql_error());
		$row = mysqli_fetch_array($query);
		$id = $row['id'];
		$dbpass = $row['password'];

		if ($password == $dbpass) {
			$_SESSION['email'] = $email;
			$_SESSION['id'] = $id;
			$_SESSION['helper'] = $row['helper'];
			$_SESSION['english'] = $row['english'];
			$_SESSION['french'] = $row['french'];

			if ($_SESSION['helper'] == 0) {
				//redirect to helpee page
				//header(Location: page.html)
			}
			else {
				//redirect to helper page
				//header(Location: page.html)
			}
		}
		else {
			//redirect to next page
			//header(Location: page.html)
			echo "Incorrect email or password";
		}
	}
?>
