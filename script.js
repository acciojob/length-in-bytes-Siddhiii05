const byteSize = (str) => {
  // write your code here
	function byteSize () {
		 return new Blob([str]).size;
	}
	console.log(byteSize)
};

// Do not change the code below
const str = ("Enter some string.");
alert(byteSize(str));
