// Dous studio ©. All right reserved.

// This converts some value to hex value
function ToHex(Val)
{
	var hex = Val.toString(16);
    //return hex.length == 1 ? "0" + hex : hex;
	if(hex.length == 1)
		return "0" + hex;
	else
		return hex;
	
	return 0;
}

