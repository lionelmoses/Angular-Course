var a=10,b=20,c=7;

/* checks a>b and a>c  if  both conditions satisfied, A is greater */

if (a>b  && a>c)
	{
		document.write("<b>10 is greater</b>");
	}

/* checks b>a  and b>c  if  both conditions satisfied, b is greater */

if (b>a  && b>c)
	{
		document.write("<b>20 is greater</b>");
	}
	
/* if the above two conditions were false c is greater*/
	else
	{
		document.write("<b>7 is greater</b>");
	}