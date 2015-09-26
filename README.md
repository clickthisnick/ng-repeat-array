# ng-repeat-array
Use ng-repeat with an array of JSON objects and decide how many items to show per row

<img src="http://clickthisnick.com/projects/ng-repeat-array/images/example.png">

<h2> I needed an easy way to show a 3x3 grid from an array with 9 JSON objects in it </h2>

<h3> Lets dissect the code</h3>

<div ng-repeat="item in repeater.getNgRepeatArray(repeater.getFourItems,3) track by $index">

The only thing special in this line is the 3. This is telling the code that you want to show 3 items per row

Next you will need 3 of the following:

    <span ng-if="repeater.getNgRepeatArrayObjectProperty(repeater.getFourItems,$index,3,1,'id') != ''">
      <button>
        {{repeater.getNgRepeatArrayObjectProperty(repeater.getFourItems,$index,3,1,'id')}}
      </button>
    </span>
    
The function getNgRepeatArrayObjectProperty takes the following parameters:
(objects,index,columnTotal,currentColumn,property)

objects = The array of JSON objects that you want to show
index = $index, which is the index from our ng-repeat
columnTotal = The amount of columns you have, so if in your ng-repeat code you put 3, this must also be 3
currentColumn = The current column this item is on. If you have a columnTotal of 3 then you will need three of these code blocks (1,2,3)
property = This is the property of the JSON object you want to return

If it is confusing download and run the example.html file or look at the AngularRepeatArrayTests.html test file.

I usually use this if I have a list of images and I want to show a certain amount of images for row.
Another example is when I have a lightbox, and some buttons I want the user to press.
The data in my database comes back as just an array of JSON objects and this makes it easy to show them in rows.
