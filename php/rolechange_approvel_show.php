<?php 
include("database.php");
$role_change = [];
$sql = "SELECT  user_maser_id,email_id,old_designation,	new_designation,reason,date FROM role_change where approval = 0";
if($result = mysqli_query($mysqli,$sql))
{
  $cr = 0;
  while($row = mysqli_fetch_assoc($result))
  {
    $role_change[$cr]['user_maser_id']    = $row['user_maser_id'];
    $role_change[$cr]['email_id'] = $row['email_id'];
    $role_change[$cr]['old_designation'] = $row['old_designation'];
    $role_change[$cr]['new_designation'] = $row['new_designation'];
    $role_change[$cr]['reason'] = $row['reason'];
    $role_change[$cr]['date'] = $row['date'];   

    $cr++;
 }
   
   echo json_encode(['data'=> $role_change]);
}
else
{
  http_response_code(404);
}

?>