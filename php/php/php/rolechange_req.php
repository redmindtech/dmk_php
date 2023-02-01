<?php
include("database.php");
$postdata = file_get_contents("php://input");

if(isset($postdata) && !empty($postdata))
{
$request = json_decode($postdata);
$email = mysqli_real_escape_string($mysqli, trim($request->email));
$user_id=$request->old_designation;
$old_designation=$request->old_designation;
$new_designation=$request->new_designation;
$reason=$request->reason;
$date=$request->date;

$sql = "INSERT INTO role_change(email,user_maser_id,old_designation,new_designation,reason,date,approval) VALUES ('$email','$user_id','$old_designation','$new_designation','$reason','pending')";
if ($mysqli->query($sql) === TRUE) {
$authdata = [
'email'=>$email,
'user_maser_id'=>$user_id,
'old_designation'=>$old_designation,
'new_designation' => $new_designation,
'reason' => $reason,
'date'=>$location_id,
'approval' =>'pending',

];
echo json_encode($authdata);
}
}
?>