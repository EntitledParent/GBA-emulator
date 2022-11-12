let savedGameTypeID = localStorage.getItem("gameTypeID");
gameTypeID = JSON.parse(savedGameTypeID);



function setGbaGameName() {
const gameNameTypeID = 
['../gba-host/gba-alt/pokemonsapphire.gba',
'../gba-host/gba-alt/0994.gba',
'../gba-host/gba-alt/advancewars.gba',
'../gba-host/gba-alt/advancewars2.gba',
'../gba-host/gba-alt/adventure-blue-chapter-b1.1.gba',
'../gba-host/gba-alt/adventure-gold-chapter-b1.2.gba',
'../gba-host/gba-alt/adventure-green-chapter-b3.gba',
'../gba-host/gba-alt/adventure-red-chapter-b15-exp-fix-c.gba',
'../gba-host/gba-alt/adventure-to-empire-isle-v0.5.gba',
'../gba-host/gba-alt/adventure-yellow-chapter-demo-fixed.gba',
'../gba-host/gba-alt/Aero_the_Acrobat__Rascal_Rival_Revenge.gba',
'../gba-host/gba-alt/aladdin.gba',
'../gba-host/gba-alt/alienhominid.gba',
'../gba-host/gba-alt/altair-2020-09-04.gba',
'../gba-host/gba-alt/altered-v1.11.2.gba',
'../gba-host/gba-alt/alternate-evolutions-final.gba',
'../gba-host/gba-alt/aluminum-v0.1.gba',
'../gba-host/gba-alt/another-emerald-v1.10c.gba',
'../gba-host/gba-alt/ash-hoenn-2021-06-08.gba',
'../gba-host/gba-alt/ash-johto-2021-01-17.gba',
'../gba-host/gba-alt/ash-kanto-2020-05-27.gba',
'../gba-host/gba-alt/ash-kanto-msb-2021-07-15.gba',
'../gba-host/gba-alt/ash-orange-league-2020-08-17.gba',
'../gba-host/gba-alt/ashgray-b4.5.3.gba',
'../gba-host/gba-alt/Astro_Boy__Omega_Factor.gba',
'../gba-host/gba-alt/atari.gba',
'../gba-host/gba-alt/Atari_Anniversary_Advance_(USA).gba',
'../gba-host/gba-alt/Banjo_Kazooie__Gruntys_Revenge.gba',
'../gba-host/gba-alt/Banjo_Pilot.gba',
'../gba-host/gba-alt/blazing-emerald-v1.6.gba',
'../gba-host/gba-alt/bomberman_max2blue.gba',
'../gba-host/gba-alt/Bomberman_Max_2__Red_(E).gba',
'../gba-host/gba-alt/bomberman_tournament.gba',
'../gba-host/gba-alt/Breath_of_Fire_(E).gba',
'../gba-host/gba-alt/Breath_of_Fire_II_(USA).gba',
'../gba-host/gba-alt/Broken_Sword__the_Shadow_of_the_Templars.gba',
'../gba-host/gba-alt/bubblebobble.gba',
'../gba-host/gba-alt/Car_Battler_Joe_(USA).gba',
'../gba-host/gba-alt/Castlevania__Aria_of_Sorrow_(USA).gba',
'../gba-host/gba-alt/Castlevania__Circle_of_the_Moon.gba',
'../gba-host/gba-alt/Castlevania__Harmony_Of_Dissonance.gba',
'../gba-host/gba-alt/cb2.gba',
'../gba-host/gba-alt/cbha.gba',
'../gba-host/gba-alt/cbprr.gba',
'../gba-host/gba-alt/cfpt.gba',
'../gba-host/gba-alt/Chu_Chu_Rocket!.gba',
'../gba-host/gba-alt/clays-calamity-1-v10.gba',
'../gba-host/gba-alt/clays-calamity-2-v5.1.gba',
'../gba-host/gba-alt/clays-calamity-3-v3.9.3.gba',
'../gba-host/gba-alt/cloud-white-3-v277.gba',
'../gba-host/gba-alt/cloud-white-v515.gba',
'../gba-host/gba-alt/cnk.gba',
'../gba-host/gba-alt/cosmicemerald-2019-12-24.gba',
'../gba-host/gba-alt/Crash_Bandicoot_2__N-Tranced.gba',
'../gba-host/gba-alt/Crash_Bandicoot__Purple_Riptos_Rampage.gba',
'../gba-host/gba-alt/Crash_Bandicoot__the_Huge_Adventure.gba',
'../gba-host/gba-alt/croket1.gba',
'../gba-host/gba-alt/croket2.gba',
'../gba-host/gba-alt/croket3.gba',
'../gba-host/gba-alt/croket4.gba',
'../gba-host/gba-alt/dark-rising-2-completed.gba',
'../gba-host/gba-alt/dark-rising-order-destroyed-completed.gba',
'../gba-host/gba-alt/dark-rising-origins-wc-final.gba',
'../gba-host/gba-alt/darkfire-b2.0.5.gba',
'../gba-host/gba-alt/darkrising-1-complete.gba',
'../gba-host/gba-alt/darkrising-kaizo-2017-04-27.gba',
'../gba-host/gba-alt/dbz_supersonic.gba',
'../gba-host/gba-alt/delta-emerald-v1.1.5.gba',
'../gba-host/gba-alt/delta-fusion.gba',
'../gba-host/gba-alt/Denki_Blocks!_(USA)_(En,Es).gba',
'../gba-host/gba-alt/Densetsu_no_Stafy.gba',
'../gba-host/gba-alt/Densetsu_no_Stafy_2.gba',
'../gba-host/gba-alt/Densetsu_no_Stafy_3.gba',
'../gba-host/gba-alt/digimon_racing.gba',
'../gba-host/gba-alt/Disneys_Kim_Possible_2__Drakkens_Demise_(U).gba',
'../gba-host/gba-alt/dkc.gba',
'../gba-host/gba-alt/dkc2.gba',
'../gba-host/gba-alt/dkc3.gba',
'../gba-host/gba-alt/dkkos.gba',
'../gba-host/gba-alt/dm.gba',
'../gba-host/gba-alt/dm2.gba',
'../gba-host/gba-alt/dmpl.gba',
'../gba-host/gba-alt/dna.gba',
'../gba-host/gba-alt/dnd.gba',
'../gba-host/gba-alt/Donkey_Kong_Country.gba',
'../gba-host/gba-alt/Donkey_Kong_Country_2_(U).gba',
'../gba-host/gba-alt/Donkey_Kong_Country_3.gba',
'../gba-host/gba-alt/Donkey_Kong__King_of_Swing.gba',
'../gba-host/gba-alt/Dr._Mario_&_Puzzle_League.gba',
'../gba-host/gba-alt/Dragonball---Advanced-Adventure--GBA.GBA',
'../gba-host/gba-alt/Dragonball-GT---Transformation--GBA.GBA',
'../gba-host/gba-alt/Dragonball-Z---Buus-Fury--GBA.GBA',
'../gba-host/gba-alt/Dragonball-Z---Supersonic-Warriors--GBA.GBA',
'../gba-host/gba-alt/Dragonball-Z---Taiketsu--GBA.GBA',
'../gba-host/gba-alt/Dragonball-Z---the-Legacy-of-Goku--GBA.GBA',
'../gba-host/gba-alt/Dragonball-Z---the-Legacy-of-Goku-2--GBA.GBA',
'../gba-host/gba-alt/dreams-v1.5.1.gba',
'../gba-host/gba-alt/drilldozer.gba',
'../gba-host/gba-alt/Drill_Dozer.gba',
'../gba-host/gba-alt/Duke_Nukem_Advance_(U).gba',
'../gba-host/gba-alt/earthwormjim.gba',
'../gba-host/gba-alt/earthwormjim2.gba',
'../gba-host/gba-alt/Ecks_vs._Sever_(E).gba',
'../gba-host/gba-alt/emerald-extreme-randomizer.gba',
'../gba-host/gba-alt/Emerald-Extreme-Rom.gba',
'../gba-host/gba-alt/emerald-multiplayer.gba',
'../gba-host/gba-alt/emerald-randomizer.gba',
'../gba-host/gba-alt/emerald-chaos-rush.gba',
'../gba-host/gba-alt/emerald-genesis-b2.1.gba',
'../gba-host/gba-alt/emerald-negative-exp.gba',
'../gba-host/gba-alt/eprp.gba',
'../gba-host/gba-alt/fan4.gba',
'../gba-host/gba-alt/fan4fo.gba',
'../gba-host/gba-alt/ff1and2.gba',
'../gba-host/gba-alt/ff4.gba',
'../gba-host/gba-alt/ff4S.gba',
'../gba-host/gba-alt/ff6.gba',
'../gba-host/gba-alt/ffeud.gba',
'../gba-host/gba-alt/fifa4.gba',
'../gba-host/gba-alt/fifa5.gba',
'../gba-host/gba-alt/fifa6.gba',
'../gba-host/gba-alt/fifa7.gba',
'../gba-host/gba-alt/fifawc6.gba',
'../gba-host/gba-alt/final_fantasy_tactics.gba',
'../gba-host/gba-alt/Final_Fight_One_(U).gba',
'../gba-host/gba-alt/firered-chaos-rush.gba',
'../gba-host/gba-alt/fire_emblem.gba',
'../gba-host/gba-alt/fr3.gba',
'../gba-host/gba-alt/frogger1.gba',
'../gba-host/gba-alt/frogger2.gba',
'../gba-host/gba-alt/frogger3.gba',
'../gba-host/gba-alt/fused-dimensions-v1.6.gba',
'../gba-host/gba-alt/fusion-3.gba',
'../gba-host/gba-alt/fusion-origins-v3.8.gba',
'../gba-host/gba-alt/fzero_gp.gba',
'../gba-host/gba-alt/fzero_max.gba',
'../gba-host/gba-alt/gamewatch4.gba',
'../gba-host/gba-alt/gba_video_pokemon_1.gba',
'../gba-host/gba-alt/gba_video_pokemon_2.gba',
'../gba-host/gba-alt/gba_video_pokemon_3.gba',
'../gba-host/gba-alt/gba_video_pokemon_4.gba',
'../gba-host/gba-alt/goldensun.gba',
'../gba-host/gba-alt/Goomba-V2.2---Pokemon-Black---Special-Palace-Edition-1-by-MB-Hacks-(Red-Hack).gba',
'../gba-host/gba-alt/Gradius_Galaxies_(USA).gba',
'../gba-host/gba-alt/gta.gba',
'../gba-host/gba-alt/gunstar_super_heroes.gba',
'../gba-host/gba-alt/hamtaro_heartbreak.gba',
'../gba-host/gba-alt/here.png',
'../gba-host/gba-alt/hmfmt.gba',
'../gba-host/gba-alt/hmmfmt.gba',
'../gba-host/gba-alt/iridion.gba',
'../gba-host/gba-alt/jbn.gba',
'../gba-host/gba-alt/jca.gba',
'../gba-host/gba-alt/jlc.gba',
'../gba-host/gba-alt/jlhth.gba',
'../gba-host/gba-alt/jlifa.gba',
'../gba-host/gba-alt/jp3dna.gba',
'../gba-host/gba-alt/jp3ia.gba',
'../gba-host/gba-alt/jp3pb.gba',
'../gba-host/gba-alt/Karnaaj_Rally_(U).gba',
'../gba-host/gba-alt/khcom.gba',
'../gba-host/gba-alt/King_of_Fighters_EX,_The__NeoBlood_(U)_(V1.1).gba',
'../gba-host/gba-alt/King_of_Fighters_EX_2__Howling_Blood.gba',
'../gba-host/gba-alt/kirbymirror.gba',
'../gba-host/gba-alt/kirbynightmare.gba',
'../gba-host/gba-alt/Klonoa_2__Dream_Champ_Tournament.gba',
'../gba-host/gba-alt/Klonoa__Empire_of_Dreams.gba',
'../gba-host/gba-alt/Konami_Krazy_Racers_(Europe).gba',
'../gba-host/gba-alt/Kururin_Paradise_(Japan).gba',
'../gba-host/gba-alt/Kuru_Kuru_Kururin.gba',
'../gba-host/gba-alt/lb.gba',
'../gba-host/gba-alt/league-of-legends-2017-09-12.gba',
'../gba-host/gba-alt/LEGO__Star_Wars_2__the_Original_Trilogy.gba',
'../gba-host/gba-alt/LEGO__Star_Wars__the_Video_Game.gba',
'../gba-host/gba-alt/li2.gba',
'../gba-host/gba-alt/Lilo_&_Stitch.gba',
'../gba-host/gba-alt/lotr2.gba',
'../gba-host/gba-alt/lotr3.gba',
'../gba-host/gba-alt/lotrtta.gba',
'../gba-host/gba-alt/lr2.gba',
'../gba-host/gba-alt/lsw.gba',
'../gba-host/gba-alt/Lunar_Legend_(U)_[!].gba',
'../gba-host/gba-alt/lyp.gba',
'../gba-host/gba-alt/m3.gba',
'../gba-host/gba-alt/mariokart.gba',
'../gba-host/gba-alt/marioland.gba',
'../gba-host/gba-alt/marioparty.gba',
'../gba-host/gba-alt/mariopinball.gba',
'../gba-host/gba-alt/Mario_and_Luigi__Superstar_Saga.gba',
'../gba-host/gba-alt/Mario_Golf__Advance_Tour.gba',
'../gba-host/gba-alt/Mario_Tennis__Power_Tour.gba',
'../gba-host/gba-alt/Mario_vs._Donkey_Kong.gba',
'../gba-host/gba-alt/Max_Payne_(USA).gba',
'../gba-host/gba-alt/Medal_of_Honor__Infiltrator_(U).gba',
'../gba-host/gba-alt/mega-evolution.gba',
'../gba-host/gba-alt/Mega-Man_Battle_Network.gba',
'../gba-host/gba-alt/Mega-Man_Battle_Network_2.gba',
'../gba-host/gba-alt/Mega-Man_Battle_Network_3__Blue.gba',
'../gba-host/gba-alt/Mega-Man_Battle_Network_3__White.gba',
'../gba-host/gba-alt/Mega-Man_Battle_Network_4__Blue_Moon.gba',
'../gba-host/gba-alt/Mega-Man_Battle_Network_4__Red_Sun.gba',
'../gba-host/gba-alt/Mega-Man_Battle_Network_5__Team_Colonel.gba',
'../gba-host/gba-alt/Mega-Man_Battle_Network_5__Team_Proto-Man.gba',
'../gba-host/gba-alt/Mega-Man_Battle_Network_6__Cybeast_Falzar.gba',
'../gba-host/gba-alt/Mega-Man_Battle_Network_6__Cybeast_Gregar.gba',
'../gba-host/gba-alt/megamanbass.gba',
'../gba-host/gba-alt/megaman_battle1.gba',
'../gba-host/gba-alt/megaman_battle2.gba',
'../gba-host/gba-alt/megaman_battle3_blue.gba',
'../gba-host/gba-alt/megaman_battle4_blue.gba',
'../gba-host/gba-alt/megaman_battle4_red.gba',
'../gba-host/gba-alt/megaman_battle5.gba',
'../gba-host/gba-alt/megaman_battle6.gba',
'../gba-host/gba-alt/megaman_zero1.gba',
'../gba-host/gba-alt/megaman_zero2.gba',
'../gba-host/gba-alt/megaman_zero3.gba',
'../gba-host/gba-alt/megaman_zero4.gba',
'../gba-host/gba-alt/metalslug.gba',
'../gba-host/gba-alt/metroid_fusion.gba',
'../gba-host/gba-alt/momotarou_dentetsu.gba',
'../gba-host/gba-alt/Monkey_Ball_Jr..gba',
'../gba-host/gba-alt/monopoly.gba',
'../gba-host/gba-alt/monster_force.gba',
'../gba-host/gba-alt/Monster_Rancher_Advance_(USA).gba',
'../gba-host/gba-alt/Monster_Rancher_Advance_2_(USA).gba',
'../gba-host/gba-alt/moon-demo.gba',
'../gba-host/gba-alt/mortal_kombat.gba',
'../gba-host/gba-alt/mvsdk.gba',
'../gba-host/gba-alt/mysteryred.gba',
'../gba-host/gba-alt/mzm.gba',
'../gba-host/gba-alt/nbaj.gba',
'../gba-host/gba-alt/nesgh1.gba',
'../gba-host/gba-alt/nfrp.gba',
'../gba-host/gba-alt/nfsu.gba',
'../gba-host/gba-alt/nfsu2.gba',
'../gba-host/gba-alt/Ninja_Cop.gba',
'../gba-host/gba-alt/onepiece.gba',
'../gba-host/gba-alt/pacman_world.gba',
'../gba-host/gba-alt/pacman_world2.gba',
'../gba-host/gba-alt/pmc.gba',
'../gba-host/gba-alt/pmpa.gba',
'../gba-host/gba-alt/Pocky_&_Rocky_with_Becky.gba',
'../gba-host/gba-alt/pokeland-0-ep-1-v1.1.gba',
'../gba-host/gba-alt/pokemal-beta.gba',
'../gba-host/gba-alt/pokemblem-2021-10-09.gba',
'../gba-host/gba-alt/pokemet-v2.gba',
'../gba-host/gba-alt/Pokemon---Liquid-Crystal-(v3.3.00512).gba',
'../gba-host/gba-alt/Pokemon-A-Grand-Day-Out.gba',
'../gba-host/gba-alt/Pokemon-Adventure---Red-Chapter-(Beta-15-+-Expansion-Fix).gba',
'../gba-host/gba-alt/Pokemon-Altered-Emerald-(v4.1e).gba',
'../gba-host/gba-alt/Pokemon-Ultra-Shiny-Gold-Sigma-(Hack-v1.3.8).gba',
'../gba-host/gba-alt/Pokemon-Ultra-Violet-(1.22)-LSA-(Fire-Red-Hack).gba',
'../gba-host/gba-alt/pokemonek.gba',
'../gba-host/gba-alt/pokemonemerald.gba',
'../gba-host/gba-alt/pokemonflorasky.gba',
'../gba-host/gba-alt/pokemongb.gba',
'../gba-host/gba-alt/pokemongreen.gba',
'../gba-host/gba-alt/pokemonlp.gba',
'../gba-host/gba-alt/pokemonred.gba',
'../gba-host/gba-alt/pokemonruby.gba',
'../gba-host/gba-alt/pokemonsapphire.gba',
'../gba-host/gba-alt/pokemon_fire_red_randomizer_version_demo.gba',
'../gba-host/gba-alt/pokes-bizarre-adventure-v1.1-final.gba',
'../gba-host/gba-alt/pokewb.gba',
'../gba-host/gba-alt/ppf.gba',
'../gba-host/gba-alt/pprs.gba',
'../gba-host/gba-alt/prs.gba',
'../gba-host/gba-alt/puyopop.gba',
'../gba-host/gba-alt/Puyo_Pop.gba',
'../gba-host/gba-alt/Puzzle_Fighter_2_Turbo.gba',
'../gba-host/gba-alt/pvzgba-2020-11-16.gba',
'../gba-host/gba-alt/r3hh.gba',
'../gba-host/gba-alt/ra.gba',
'../gba-host/gba-alt/Racing_Gears_Advance_(U).gba',
'../gba-host/gba-alt/Ray-Man_3__Hoodlum_Havoc.gba',
'../gba-host/gba-alt/Ray-Man_Advance.gba',
'../gba-host/gba-alt/Rhythm_Tengoku_(Japan).gba',
'../gba-host/gba-alt/rsrs.gba',
'../gba-host/gba-alt/rtpl.gba',
'../gba-host/gba-alt/ruby-destiny-bt-b1.gba',
'../gba-host/gba-alt/ruby-destiny-log-2017v1.gba',
'../gba-host/gba-alt/ruby-destiny-rol-2016v4.1.gba',
'../gba-host/gba-alt/ruby-destiny-rol-remake-b1.gba',
'../gba-host/gba-alt/ruby-destiny-rr-hrm-2021-07-08.gba',
'../gba-host/gba-alt/ruby-wonder-guard.gba',
'../gba-host/gba-alt/sag.gba',
'../gba-host/gba-alt/sc.gba',
'../gba-host/gba-alt/simpsons.gba',
'../gba-host/gba-alt/sims2.gba',
'../gba-host/gba-alt/sims_bustin_out.gba',
'../gba-host/gba-alt/sirius-2020-09-04.gba',
'../gba-host/gba-alt/sma4+.gba',
'../gba-host/gba-alt/sonicbattle.gba',
'../gba-host/gba-alt/sonicpinball.gba',
'../gba-host/gba-alt/sonic_advance.gba',
'../gba-host/gba-alt/sonic_advance2.gba',
'../gba-host/gba-alt/sonic_advance3.gba',
'../gba-host/gba-alt/Spyro_3__Attack_of_the_Rhynocs.gba',
'../gba-host/gba-alt/spyro_adventure.gba',
'../gba-host/gba-alt/spyro_flame.gba',
'../gba-host/gba-alt/spyro_ice.gba',
'../gba-host/gba-alt/Spyro_Orange__the_Cortex_Conspiracy.gba',
'../gba-host/gba-alt/sthg.gba',
'../gba-host/gba-alt/stranded-v0.1.4.gba',
'../gba-host/gba-alt/Summon_Night__Swordcraft_Story.gba',
'../gba-host/gba-alt/Summon_Night__Swordcraft_Story_2.gba',
'../gba-host/gba-alt/supermarioadvance.gba',
'../gba-host/gba-alt/supermarioadvance2.gba',
'../gba-host/gba-alt/supermarioadvance3.gba',
'../gba-host/gba-alt/supermarioadvance4.gba',
'../gba-host/gba-alt/supermonkeyballjr.gba',
'../gba-host/gba-alt/superstar.gba',
'../gba-host/gba-alt/Super_Bust-A-Move_(USA)_(En,Fr,Es).gba',
'../gba-host/gba-alt/Super_Dodge_Ball_Advance_(Europe).gba',
'../gba-host/gba-alt/Super_Ghouls_N_Ghosts_(U).gba',
'../gba-host/gba-alt/super_street_fighter_2_turbo_revival.gba',
'../gba-host/gba-alt/super_street_fighter_3_alpha.gba',
'../gba-host/gba-alt/Sword_of_Mana_(USA,_Australia).gba',
'../gba-host/gba-alt/Tactics_Ogre__the_Knight_of_Lodis.gba',
'../gba-host/gba-alt/tak2_staff_of_dreams.gba',
'../gba-host/gba-alt/tales_of_phantasia.gba',
'../gba-host/gba-alt/team-training-v8.gba',
'../gba-host/gba-alt/Tekken_Advance_(U)_[!].gba',
'../gba-host/gba-alt/tetris_worlds.gba',
'../gba-host/gba-alt/tggtc.gba',
'../gba-host/gba-alt/tgr.gba',
'../gba-host/gba-alt/thas.gba',
'../gba-host/gba-alt/thps2.gba',
'../gba-host/gba-alt/thps3.gba',
'../gba-host/gba-alt/thps4.gba',
'../gba-host/gba-alt/thu.gba',
'../gba-host/gba-alt/thu2.gba',
'../gba-host/gba-alt/tmnt.gba',
'../gba-host/gba-alt/Tony_Hawks_Downhill_Jam.gba',
'../gba-host/gba-alt/Touhou-Puppet-Play-Enhanced-(Reloaded-v4.6).gba',
'../gba-host/gba-alt/Touhou-Puppet-Play-Enhanced-v1.11---Original.gba',
'../gba-host/gba-alt/Touhou-Puppet-Play-Enhanced-v1.11---Renko.gba',
'../gba-host/gba-alt/Touhoumon-Purple-(Difficulty---Hard).gba',
'../gba-host/gba-alt/Touhoumon-Purple-(Difficulty---Ultimate).gba',
'../gba-host/gba-alt/Touhoumon-Purple-(Difficulty---Very-Hard).gba',
'../gba-host/gba-alt/Touhoumon-Purple-(Original).gba',
'../gba-host/gba-alt/Touhoumon-Purple-(Sandbox).gba',
'../gba-host/gba-alt/Turbo-Turtle-Adventure-(USA).gba',
'../gba-host/gba-alt/turok_evolution.gba',
'../gba-host/gba-alt/twenty50-v0.0.1.gba',
'../gba-host/gba-alt/ty2.gba',
'../gba-host/gba-alt/ty3.gba',
'../gba-host/gba-alt/Ultimate_Brain_Games_(U).gba',
'../gba-host/gba-alt/Ultimate_Card_Games_(U).gba',
'../gba-host/gba-alt/unsb.gba',
'../gba-host/gba-alt/V-Rally_3_(U).gba',
'../gba-host/gba-alt/Virtua_Tennis_(U).gba',
'../gba-host/gba-alt/Wade_Hixtons_Counter_Punch_(USA,_Europe).gba',
'../gba-host/gba-alt/warioland4.gba',
'../gba-host/gba-alt/wario_ware.gba',
'../gba-host/gba-alt/ygo-pokeduel-v3.0.gba',
'../gba-host/gba-alt/ynfa.gba',
'../gba-host/gba-alt/Yu-Gi-Oh!__The_Eternal_Duelist_Soul_(U)_[!].gba',
'../gba-host/gba-alt/zelda_minish.gba',
'../gba-host/gba-alt/zelda_past.gba',
'../gba-host/gba-alt/007.gba',
'Binaries/Pokemon_Emerald_Rogue_EX_(v1.2.1).gba',





]

function returnLast(arr) {
    return arr.at(gameTypeID - 1);
  }
const getGameNameFromAr = returnLast(gameNameTypeID);

gameName = getGameNameFromAr;
}
