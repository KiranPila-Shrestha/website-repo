/*external javascript created*/
function validateForm(){
						var FullName= document.forms["MessageForm"]["fname"].value;
						var Email= document.forms["MessageForm"]["Ename"].value;
						var Typeyourmsg= document.forms["MessageForm"]["Tname"].value;
						//alert(message details);
						if(FullName=="" ||  Email=="" || Typeyourmsg=="")
						{
							alert("Empty fields are present!!!Please enter the details..");}
							else{
								alert("Thank you for Your order and feedback!!")
							}
						}
					