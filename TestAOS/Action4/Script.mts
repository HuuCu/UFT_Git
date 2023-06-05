Browser("Advantage Shopping_2").Page("Advantage Shopping").Link("UserMenu").Click @@ script infofile_;_ZIP::ssf1.xml_;_
Browser("Advantage Shopping").Page("Advantage Shopping").Link("Sign out").Click @@ script infofile_;_ZIP::ssf2.xml_;_
DataTable.Export("D:\UFT One Script Test\TestGit\DataResults.xlsx")
Browser("Advantage Shopping").Close
