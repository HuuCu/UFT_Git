﻿Browser("Advantage Shopping").Page("Advantage Shopping").Link("ShoppingCart").Click @@ script infofile_;_ZIP::ssf1.xml_;_
Browser("Advantage Shopping").Page("Advantage Shopping").WebElement("$539.98").Check CheckPoint("$539.98") @@ script infofile_;_ZIP::ssf2.xml_;_
Browser("Advantage Shopping").Page("Advantage Shopping").WebButton("check_out_btn").Click @@ script infofile_;_ZIP::ssf3.xml_;_
Browser("Advantage Shopping").Page("Advantage Shopping").WebElement("$719.98").Check CheckPoint("$719.98") @@ script infofile_;_ZIP::ssf4.xml_;_
Browser("Advantage Shopping").Page("Advantage Shopping").WebButton("next_btn").Click @@ script infofile_;_ZIP::ssf5.xml_;_
Browser("Advantage Shopping").Page("Advantage Shopping").WebEdit("safepay_username").Set "userdemo" @@ script infofile_;_ZIP::ssf6.xml_;_
Browser("Advantage Shopping").Page("Advantage Shopping").WebEdit("safepay_password").Set "Ab123456" @@ script infofile_;_ZIP::ssf7.xml_;_
Browser("Advantage Shopping").Page("Advantage Shopping").WebCheckBox("save_safepay").Set "OFF" @@ script infofile_;_ZIP::ssf8.xml_;_
Browser("Advantage Shopping").Page("Advantage Shopping").WebButton("pay_now_btn_SAFEPAY").Click @@ script infofile_;_ZIP::ssf9.xml_;_
Browser("Advantage Shopping").Page("Advantage Shopping").WebElement("$719.98_2").Check CheckPoint("$719.98_2") @@ script infofile_;_ZIP::ssf10.xml_;_
Browser("Advantage Shopping").Page("Advantage Shopping").WebElement("Thank you for buying with").Check CheckPoint("Thank you for buying with Advantage") @@ script infofile_;_ZIP::ssf11.xml_;_
Wait 3 @@ script infofile_;_ZIP::ssf11.xml_;_
trackingNumber = Browser("Advantage Shopping").Page("Advantage Shopping").WebElement("trackingNumberLabel").GetROProperty("text")
Datatable.Value("trackingNumberLabel_innertext",  dtLocalSheet) = trackingNumber
Browser("Advantage Shopping").Page("Advantage Shopping").WebElement("trackingNumberLabel").Check CheckPoint("trackingNumberLabel") @@ script infofile_;_ZIP::ssf12.xml_;_
Wait 3 @@ script infofile_;_ZIP::ssf11.xml_;_
orderNumber = Browser("Advantage Shopping").Page("Advantage Shopping").WebElement("orderNumberLabel").GetROProperty("text")
Datatable.Value("orderNumberLabel", dtLocalSheet) = orderNumber
Browser("Advantage Shopping").Page("Advantage Shopping").WebElement("orderNumberLabel").Check CheckPoint("orderNumberLabel") @@ script infofile_;_ZIP::ssf14.xml_;_
Wait 3 @@ script infofile_;_ZIP::ssf11.xml_;_
Browser("Advantage Shopping_2").Page("Advantage Shopping").Link("UserMenu").Click
Browser("Advantage Shopping").Page("Advantage Shopping").Link("My orders").Click @@ script infofile_;_ZIP::ssf15.xml_;_
Wait 3 @@ script infofile_;_ZIP::ssf11.xml_;_
strorderNumber = Browser("Advantage Shopping").Page("Advantage Shopping").WebElement("Kiểm tra mã Order").GetROProperty("text")
Datatable.Value("Kiểm tra mã order",dtLocalSheet) = strorderNumber
Browser("Advantage Shopping").Page("Advantage Shopping").WebElement("Kiểm tra mã Order").Check CheckPoint("Kiểm tra mã Order")
Browser("Advantage Shopping").Page("Advantage Shopping").WebElement("REMOVE").Click @@ script infofile_;_ZIP::ssf17.xml_;_
Browser("Advantage Shopping").Page("Advantage Shopping").WebButton("confBtn_1").Click @@ script infofile_;_ZIP::ssf20.xml_;_

