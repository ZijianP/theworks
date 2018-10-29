
if (actinit == true) {
 
  /* new */ Next action due date =
  /* If SNMDD is blank, use NMDD. If it's not a survey module, correct for the fact that due date accounts for sending the survey early */
  IF(ISBLANK([Case].Set_Next_Module_Due_Date__c), [Case].Next_Call_Date_Calc__c +
    IF([Case].Contact.Current_Journey__c.Next_Module__c.Survey_Module__c = FALSE,
      IF(ISPICKVAL([Case].Contact.Program_Type__c, "PACK+"), 2, 1), 0),
    /* Otherwise, use SNMDD. If it's a survey module, amend date to send survey early */
    [Case].Set_Next_Module_Due_Date__c -
    IF([Case].Contact.Current_Journey__c.Next_Module__c.Survey_Module__c = TRUE,
      IF(ISPICKVAL([Case].Contact.Program_Type__c, "PACK+"), 2, 1), 0)) ''



  /* new */ ContactID = contactID
  /* new */ description = ctact.current_journey__r.next_module__r.decription__c
  /* new */ diagnosis = contact.primary_diagnosis__c 
  /* new */ Important notes = contact.notes__c 
  /* new */ Journey = Contact.Current_Journey__c 
  /* new */ Journey Position = 
    [Case].Contact.Current_Journey__c.Num_Mods_Generated__c + 1

  /* new */ Module Type = contact.current_journey__r.next_module__c 

  /* new */ Nudge Topic = contact.current_journey__r..next_module__r.nudge_topic__c 
  
  /* new */ Module Origin = standard module 
  /* new */Original Due date = Next_Call_Date_Calc__c
  /* new */ module owner = Contact.OwnerID 
  /* new */ previous notes = module_notes_long_text__c 
  /* new */ Previous module = case.ID 
  /* new */ 



}