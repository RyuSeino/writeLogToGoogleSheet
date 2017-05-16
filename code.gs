function doPost(e) {
  
  var id = e.parameter.user_id;
  var name = e.parameter.user_name;
  var event = e.parameter.event;
  var date = e.parameter.date;
  
  
  if(/^[0-9]{1,4}$/.test(id) === false) {
    return ContentService.createTextOutput(JSON.stringify({'status':'failure'}))
    .setMimeType(ContentService.MimeType.JSON);
  }
  
  var sheet = SpreadsheetApp.getActiveSheet();
  var row = sheet.getLastRow() + 1;
  
  sheet.getRange(row, 1).setValue(id);
  sheet.getRange(row, 2).setValue(name);
  sheet.getRange(row, 3).setValue(event);
  sheet.getRange(row, 4).setValue(date);
    
 
  return ContentService.createTextOutput(JSON.stringify({'status':'success'}))
  .setMimeType(ContentService.MimeType.JSON);
   
}
