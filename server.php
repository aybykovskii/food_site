<?php
$_POST = json_decode(file_get_contents("php://input"), true);
echo var_dump($_POST);

  // include_once("db.php");

  // $menuItems = $mysqli->query("SELECT * FROM `menu`");

  // $res = array();
  // if($menuItems && $menuItems->num_rows > 0){
  //   while($menuItem = $menuItems->fetch_array(MYSQLI_ASSOC)){
  //     $res[] = $menuItem;
  //   }
  // }

  // if(count($res) === 0){
  //   echo json_encode(array("status" => 300, "message" => "Rows not found"));
  // }

  // echo json_encode(array("status" => 200, "data" => $res));