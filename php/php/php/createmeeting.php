<?php

include("database.php");
 
$postdata = file_get_contents("php://input");
if(isset($postdata) && !empty($postdata))
    {
    $request = json_decode($postdata);
    $meeting_name=$request->meeting_name;
    $meeting_time=$request->meeting_time;
    $meeting_date = $request->meeting_date;
    $participants = $request->participants;
    $constituency = $request->$constituency;
    $meeting_type = $request->meeting_type;
    $meeting_location = $request->meeting_location;	
    $comments = $request->comments;



$sql = "INSERT INTO meetings ( date, time, meeting_location, meeting_name, meeting_type,  participants, constituency, comments )VALUES ( '$meeting_date', '$meeting_time', '$meeting_location', '$meeting_name', '$meeting_type',  '$participants', '$constituency', '$comments')";
if ($mysqli->query($sql) === TRUE) {
    $authdata = [
        'meeting_name'=>$meeting_name,
       'meeting_time'=>$meeting_time,
        'meeting_date' => $meeting_date,
        'participants' => $participants,
        'constituency' => $constituency,
        'meeting_type' => $meeting_type,
        'meeting_location' =>$meeting_location,	
        'comments' => $comments
    ];
    echo json_encode($authdata);
    }
     }