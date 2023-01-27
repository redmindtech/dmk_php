<?php
include("database.php");
$postdata = file_get_contents("php://input");
function randomPassword() {
    $alphabet = "abcdefghijklmnopqrstuwxyzABCDEFGHIJKLMNOPQRSTUWXYZ0123456789";
    $pass = array();
    $alphaLength = strlen($alphabet) - 1;
    for ($i = 0; $i < 8; $i++) {
        $n = rand(0, $alphaLength);
        $pass[] = $alphabet[$n];
    }
    return implode($pass);
}
$mode=$_GET['mode'];
if($mode==0)
{
    if(isset($postdata) && !empty($postdata))
    {
    $request = json_decode($postdata);
    $email = mysqli_real_escape_string($mysqli, trim($request->email));
    $firstname=$request->firstname;
    $lastname=$request->lastname;
    $location_id=$request->location_id;
    $district=$request->district;
    $designation=$request->designation;
    $party_designation=$request->party_designation;
    $status_approval=$request->approval_status;
    $password=randomPassword();

    $sql = "INSERT INTO user_master(email,password,category,firstname,lastname,location_id,district,approval_status,party_designation,designation) VALUES ('$email','$password','SA','$firstname','$lastname',$location_id,'$district','$status_approval','$party_designation','$designation')";
    if ($mysqli->query($sql) === TRUE) {
    $authdata = [
    'password'=>$password,
    'category'=>'SA',
    'firstname' => $firstname,
    'lastname' => $lastname,
    'location_id'=>$location_id,
    'district' => $district,
    'approval_status' =>$status_approval,
    'party_designation' => $party_designation,
    'designation' =>$designation,
    ];
    echo json_encode($authdata);
    }
    }
}
else if($mode==1)
{
    if(isset($postdata) && !empty($postdata))
{
$request = json_decode($postdata);
$email = mysqli_real_escape_string($mysqli, trim($request->email));
$firstname=$request->firstname;
$lastname=$request->lastname;
//$father_name=$request->father_name;
//$parent_number=$request->parent_number;
$location_id=$request->location_id;
$district=$request->district;
$designation=$request->designation;
$party_designation=$request->party_designation;
$status_approval=$request->approval_status;

$sql = "INSERT INTO user_master(email,category,firstname,lastname,location_id,district,approval_status,party_designation,designation) VALUES ('$email','DA','$firstname','$lastname',$location_id,'$district','$status_approval','$party_designation','$designation')";
if ($mysqli->query($sql) === TRUE) {
$authdata = [
'email'=>$email,
'category'=>'DA',
'firstname' => $firstname,
'lastname' => $lastname,
'location_id'=>$location_id,
'district' => $district,
'approval_status' =>$status_approval,
'party_designation' => $party_designation,
'designation' =>$designation,
//'id' => mysqli_insert_id($mysqli)
];
echo json_encode($authdata);
}
}
}

else{
    if(isset($postdata) && !empty($postdata))
{
$request = json_decode($postdata);
$email = mysqli_real_escape_string($mysqli, trim($request->email));
$firstname=$request->firstname;
$lastname=$request->lastname;
$father_name=$request->father_name;
$age=$request->age;
$educational_qualification=$request->educational_qualification;
$date_of_birth=$request->date_of_birth;
$additional_qualification=$request->additional_qualification;
$contact_no=$request->contact_no;
$whatsapp_no=$request->whatsapp_no;
$profession=$request->profession;
$address1=$request->address1;
$applied_role=$request->applied_role;
$party_comments=$request->party_comments;
$location_id=$request->location_id;

$sql = "INSERT INTO user_master(email,firstname,lastname,father_name,age,address1,location_id,contact_no,whatsapp_no,date_of_birth,educational_qualification,profession,additional_qualification,applied_role,party_comments) VALUES ('$email','$firstname','$lastname','$father_name',$age,'$address1',$location_id,$contact_no,$whatsapp_no,'$date_of_birth','$educational_qualification','$profession','$additional_qualification','$applied_role','$party_comments')";
if ($mysqli->query($sql) === TRUE) {
$authdata = [

//'id' => mysqli_insert_id($mysqli)

'firstname' =>  $firstname,
'lastname'  =>  $lastname,
'father_name'   =>  $father_name,
'age'   =>  $age,
'educational_qualification' =>  $educational_qualification,
'date_of_birth' =>  $date_of_birth,
'additional_qualification'  =>  $additional_qualification,
'contact_no'    =>  $contact_no,
'whatsapp_no'   =>  $whatsapp_no,
'profession'    =>  $profession,
'address1'  =>  $address1,
'applied_role'  =>  $applied_role,
'party_comments'    =>  $party_comments,
'location_id'   =>  $location_id,

];
echo json_encode($authdata);
}
}
}


?>
