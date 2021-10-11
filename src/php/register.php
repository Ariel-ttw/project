<?php

header('content-type"text/html;charset="utf-8"');

$username = $_POST['username'];
$password = $_POST['password'];




$link = mysqli_connect("localhost","root","","account");

if(!$link){
    $responddata['code']=0;
    $responddata['message']="fail to connect database";
    echo jason_encode($responddata);
    exit;
}

mysqli_query($link,"set names 'utf8'");


$sql = "SELECT * FROM users WHERE username= '{$username}'";
$res = $link->query($sql);

if ($res->num_rows > 0){
    $responddata['code']=1;
    $responddata['message'] = "username exists";
    echo json_encode($responddata);
    exit;
}

$sql1 =" INSERT INTO users(username,password) VALUES('{$username}','{$password}')";


$res1 = mysqli_query($link, $sql1);
if (!$res1){
    $responddata['code'] = 2 ;
    $responddata['message']="register fail";
    echo json_encode($responddata);
    exit;

}else{
    $responddata['code']=3;
    $responddata['message']="register success";
    echo json_encode($responddata);
}
mysqli_close($link);



?>