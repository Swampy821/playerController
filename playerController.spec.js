var pc = new playerController('Player');


QUnit.test("Getting & editing a players name.",function( assert) {
  var playerName = pc.getName();
  assert.equal(playerName,'Player', "Expect the player name to be \"Player\"");

  var setPlayerName = pc.setName('Player 1');
  assert.equal(setPlayerName,true, "Expect to successfully set player name.");

  var playerName = pc.getName();
  assert.equal(playerName,"Player 1", "Expect the new player name to be \"Player 1\"");
});


QUnit.test("Getting and Setting a players nick name.", function(assert) {
  var setPlayerNick = pc.setNickName("Player Nick Name");
  assert.equal(setPlayerNick, true, "Expect player nick to have been added successfully");
  var getPlayerNick = pc.getNickName();
  assert.equal(getPlayerNick,"Player Nick Name", "Expect player nick to be \"Player Nick Name\"");
});


QUnit.test("Getting and Setting a players luck.", function(assert) {
  pc.setMaxLuck(15);
  var setPlayerLuck = pc.setLuck(10);
  assert.equal(setPlayerLuck, 10, "Expect player luck to have been set to 10.");
  var getPlayerLuck = pc.getLuck();
  assert.equal(getPlayerLuck, 10, "Expect player luck to be 10.");
});


QUnit.test("Getting and setting Player Agility.", function(assert) {
  pc.setMaxAgi(15);
  var setPlayerAgility = pc.setAgi(10);
  assert.equal(setPlayerAgility, 10, "Expect player Agility to have been set to 10.");
  var getPlayerAgility = pc.getAgi();
  assert.equal(getPlayerAgility, 10, "Expect player Agility to be 10.");
});

QUnit.test("Getting and setting player Dexterity.", function(assert) {
  pc.setMaxDex(15);
  var setPlayerDexterity = pc.setDex(10);
  assert.equal(setPlayerDexterity, 10, "Expect player Dexterity to have bene set to 10.");
  var getPlayerDexterity = pc.getDex();
  assert.equal(getPlayerDexterity, 10, "Expect player Dexterity to be 10.");
});

QUnit.test("Getting and setting player Endurance.", function(assert) {
  pc.setMaxEnd(15);
  var setPlayerEndurance = pc.setEnd(10);
  assert.equal(setPlayerEndurance, 10, "Expect player Endurance to have been set to 10.");
  var getPlayerEndurance = pc.getEnd();
  assert.equal(getPlayerEndurance, 10, "Expect player endurance to be 10.");
});

QUnit.test("Getting and setting player AC.", function(assert) {
  pc.setMaxAc(15);
  var setPlayerAC = pc.setAc(10);
  assert.equal(setPlayerAC, 10, "Expect player AC to have been set to 10.");
  var getPlayerAC = pc.getAc();
  assert.equal(getPlayerAC, 10, "Expect player AC to be 10.");
});