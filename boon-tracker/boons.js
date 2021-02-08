// this is the initial set of data for an app to track boons in hades
// this file generates a new pantheon object


class God {
  constructor() {
    this.boons = []
  }

  addBoons(boonArray) {
    for (let boon of boonArray) {
      // console.log('boon', boon);
      this.boons.push({
        title: `${boon}`, 
        active: false
      });
    }

  }
}


let pantheon; 

function createPantheon() {
  let zeus = new God();
  zeus.addBoons(['lightning strike', 'thunder flourish', 'electric shot', 'thunder flare', 'thunder dash', 'zeus\' aid', 'heaven\'s vengeance', 'lightning reflexes', 'storm lightning', 'high voltage', 'double strike', 'static discharge', 'clouded judgement', 'billowing strength', 'splitting bolt']);

  let poseidon = new God();
  poseidon.addBoons(['tempest strike', 'tempest flourish', 'flood shot', 'flood flare', 'tidal dash', 'poseidon\'s aid', 'typhoon\s fury', 'hydraulic might', 'ocean\'s bounty', 'sunken treasure', 'razor shoals', 'boiling point', 'breaking wave', 'wave pounding', 'rip current', 'huge catch', 'second wave']);

  let athena = new God();
  athena.addBoons(['divine strike', 'divine flourish', 'phalanx shot', 'phalanx flare', 'divine dash', 'athena\'s aid', 'holy shield', 'bronze skin', 'sure footing', 'proud bearing', 'blinding flash', 'brilliant riposte', 'deathless stand', 'last stand', 'divine protection']);

  let aphrodite = new God();
  aphrodite.addBoons(['heartbreak strike', 'heartbreak flourish', 'crush shot', 'passion flare', 'passion dash', 'aphrodite\'s aid', 'dying lament', 'wave of despair', 'different league', 'life affirmation', 'empty inside', 'sweet surrender', 'broken resolve', 'blown kiss', 'unhealthy fixation']);

  let artemis = new God();
  artemis.addBoons(['deadly strike', 'deadly flourish', 'true shot', 'hunter\'s flare', 'hunter dash', 'artemis\' aid', 'pressure points', 'exit wounds', 'hide breaker', 'clean kill', 'hunter instinct', 'hunter\'s mark', 'support fire', 'fully loaded']);

  let ares = new God();
  ares.addBoons(['curse of agony', 'curse of pain', 'slicing shot', 'slicing flare', 'blade dash', 'ares\' aid', 'curse of vengeance', 'urge to kill', 'battle rage', 'blood frenzy', 'black metal', 'engulfing vortex', 'dire misfortune', 'impending doom', 'vicious cycle']);

  let dionysus = new God();
  dionysus.addBoons(['trippy shot', 'trippy flare', 'drunken dash', 'dionysus\' aid', 'after party', 'positive outlook', 'premium vintage', 'strong drink', 'bad influence', 'numbing sensation', 'peer pressure', 'high tolerance', 'black out']);

  let hermes = new God();
  hermes.addBoons(['swift strike', 'swift flourish', 'flurry cast', 'quick favor', 'hyper sprint', 'greater haste', 'quick recovery', 'greater evasion', 'greatest reflex', 'second wind', 'quick reload', 'side hustle', 'rush delivery', 'auto reload', 'greater recall', 'bad news']);

  let demeter = new God();
  demeter.addBoons(['frost strike', 'frost flourish', 'crystal beam', 'icy flare', 'mistral dash', 'demeter\'s aid', 'frozen touch', 'rare crop', 'ravenous will', 'nourished soul', 'snow burst', 'arctic blast', 'killing freeze', 'glacial glare', 'winter harvest']);


  return pantheon = {zeus, poseidon, athena, aphrodite, artemis, ares, dionysus, hermes, demeter};

  // return console.log('pantheon', pantheon.zeus.boons[0].title);
  // return console.log('pantheon', pantheon.demeter);
  
}

createPantheon();
console.log('demeter boons', pantheon.demeter.boons)


// let duos = ['smoldering air', 'vengeful mood', 'lightning rod', 'lightning phalanx', 'cold fusion', 'scintillating feast', 'sea storm', 'sweet nectar', 'curse of drowning', 'mirage shot', 'unshakable mettle', 'blizzard shot', 'exclusive access', 'parting shot', 'merciful end', 'deadly reversal', 'stubborn roots', 'calculated', 'curse of longing', 'heart rend', 'cold embrace', 'low tolerance', 'hunting blades', 'crystal clarity', 'splitting headache', 'freezing vortex', 'curse of nausea', 'ice wine', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '']