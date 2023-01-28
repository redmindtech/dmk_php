<?php

include("database.php");
$postdata = file_get_contents("php://input");
// approve
if ($approval_status == 1) {
    if (isset($postdata) && !empty($postdata)) {
        $request = json_decode($postdata);
        $user_id = $request->user_id;
        $party_designation = $request->party_designation;
        $sql = "UPDATE role_change SET approval = approved where user_maser_id =  $user_id";
        if ($mysqli->query($sql) === TRUE) {
            $authdata = [
                'approval' => 'approved'
            ];
            echo json_encode($authdata);

        } else {
            echo "Error updating record: " . $mysqli->connect_error;
        }
        $sql1 = "UPDATE user_master SET party_designation = $party_designation where id =  $user_id";
        if ($mysqli->query($sql1) === TRUE) {
            $authdata = [
                'party_designation' => $party_designation
            ];
            echo json_encode($authdata);

        } else {
            echo "Error updating record: " . $mysqli->connect_error;
        }
    }
}
//REJECT
else {
    $sql = "UPDATE role_change SET approval = reject where user_maser_id = $user_id";
    if ($mysqli->query($sql) === TRUE) {
        echo " records UPDATED successfully";

    } else {
        echo "Error updating record: " . $mysqli->connect_error;
    }
}
?>