@Rooms
Feature: User Verifies if Room has TV

  Background:
    Given user launches the B&B page

  Scenario Outline: User checks with room has TV
    When user navigates to Our Rooms
    Then user verifies TV Icon for room "<RoomName>"
   
    Examples:
      | RoomName    |
      | Single      |
      | Double      |
      | Suite       |

  Scenario Outline: User checks Availability and verifies error
    When user clicks Book Now
    And user enters check in and check out date for '<NoOfDays>' and '<RoomName>'
    And user checks Availability
    And user books '<RoomName>' room
    And user clicks on reserve now
    And user fills booking form for error
    And user clicks on reserve now
    Then user verifies error message

    Examples:
      | RoomName    | NoOfDays |
      | Single      | 2        |
      
      
  Scenario Outline: User reserves and verifies success message
    When user clicks Book Now
    And user enters check in and check out date for '<NoOfDays>' and '<RoomName>'
    And user checks Availability
    When user books '<RoomName>' room
    And user clicks on reserve now
    And user fills booking form 
    And user clicks on reserve now
    Then user verifies success message for "<RoomName>"

    Examples:
      | RoomName    | NoOfDays |
      | Suite       | 2        |
      




