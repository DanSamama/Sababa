$firstName = $_POST["firstName"];
$lastName = $_POST["lastName"];
$email = $_POST["email];
$password = $_POST["password"];
$phoneNumber = $_POST["phoneNumber"];
$languages = array($_POST["speakFrench"], $_POST["speakEnglish"]);
$helpCategories = array($_POST["bankHelp"], $_POST["insuranceHelp"], $_POST["billsHelp"],
					    $_POST["cellHelp"], $_POST["hapanimHelp"]);
$daysAvailable = array($_POST["sunday"], $_POST["monday"], $_POST["tuesday"],
					   $_POST["wednesday"], $_POST["thursday"], $_POST["friday"],
					   $_POST["saturday"]);

include_once("db.php");
if ($db->connect_error) {
    die("Connection failed: " . $db->connect_error);
    exit();
} 
$sql = "INSERT INTO sababa_tbl (1, $email, $password, $firstName, $lastName, $phoneNumber,
							    $languages[0], $languages[1], $helpCategories[0], $helpCategories[1],
							    $helpCategories[2], $helpCategories[3], $helpCategories[4],
							    $daysAvailable[0],$daysAvailable[1], $daysAvailable[2], $daysAvailable[3],
							    $daysAvailable[4], $daysAvailable[5], $daysAvailable[6], 0)
		VALUES (helper, email, password, first_name, last_name, phone, french, english, bank, 
		        insurance, bills, cell_phone, visa, mondays, tuesdays, wednesdays, thursdays,
		        fridays, saturdays, sundays, rating)";
if ($db->query($sql) === TRUE) {
    echo "New record created successfully";
} else {
    echo "Error: " . $sql . "<br>" . $db->error;
    exit();
}

$db->close();

echo("You have successfuly registered");
