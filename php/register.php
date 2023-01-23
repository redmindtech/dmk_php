<?php
include("database.php");
$postdata = file_get_contents("php://input");
if(isset($postdata) && !empty($postdata))
{
$request = json_decode($postdata);
$email = mysqli_real_escape_string($mysqli, trim($request->email));
$firstname=$request->firstname;
$lastname=$request->lastname;
$father_name=$request->father_name;
//$parent_number=$request->parent_number;
$location_id=$request->location_id;
$district=$request->district;
$contact_no=$request->contact_no;
$date_of_birth=$request->date_of_birth;
$educational_qualification=$request->educational_qualification;
$profession=$request->profession;

$sql = "INSERT INTO user_master(email,firstname,lastname,father_name,location_id,district,contact_no,date_of_birth,educational_qualification,profession) VALUES ('$email','$firstname','$lastname','$father_name',$location_id,'$district',$contact_no,'$date_of_birth','$educational_qualification','$profession')";
if ($mysqli->query($sql) === TRUE) {
$authdata = [
'email' => $email,
'firstname' => $firstname,
'lastname' => $lastname,
'father_name' => $father_name,
//'parent_number' => $parent_number,
'location_id'=>$location_id,
'district' => $district,
'contact_no' =>$contact_no,
'date_of_birth' => $date_of_birth,
'educational_qualification' =>$educational_qualification,
'profession' =>$profession,
//'id' => mysqli_insert_id($mysqli)
];
echo json_encode($authdata);
}
}
?>
