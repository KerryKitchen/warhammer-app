//
import useSound from 'use-sound';
import './App.css';

// Space Marine sound files
import bolter_heavy_audio from './assets/audio/space-marines/bolter-heavy.mp3';
import bolter_pistol_audio from './assets/audio/space-marines/bolter-pistol.mp3';
import chainsword_audio from './assets/audio/space-marines/chainsword.mp3';
import grenade_audio from './assets/audio/space-marines/grenade.mp3';
import biker_move_audio from './assets/audio/space-marines/biker-move.mp3';
import deflect_hit_audio from './assets/audio/space-marines/biker-deflect.mp3';
import infantry_take_damage_audio from './assets/audio/space-marines/infantry-take-damage.mp3';
import infantry_take_damage_2_audio from './assets/audio/space-marines/infantry-take-damage-2.mp3';
import biker_die_audio from './assets/audio/space-marines/biker-die.mp3';
import power_sword_audio from './assets/audio/space-marines/power-sword.mp3';
import infantry_die_audio from './assets/audio/space-marines/infantry-die.mp3';
import infantry_die_2_audio from './assets/audio/space-marines/infantry-die-2.mp3';
import infantry_move_audio from './assets/audio/space-marines/infantry-move.mp3';
import plasma_pistol_audio from './assets/audio/space-marines/plasma-pistol.mp3';
import plasma_gun_audio from './assets/audio/space-marines/plasma-gun.mp3';
import biker_hit_audio from './assets/audio/space-marines/biker-hit.mp3';

// Necron sound files
import gauss_flayer_audio from './assets/audio/necrons/gauss-flayer.mp3';
import gauss_reaper_audio from './assets/audio/necrons/gauss-reaper.mp3';
import glaive_audio from './assets/audio/necrons/glaive.mp3';
import necron_die_audio from './assets/audio/necrons/necron-die.mp3';
import necron_die_2_audio from './assets/audio/necrons/necron-die-2.mp3';
import necron_die_3_audio from './assets/audio/necrons/necron-die-3.mp3';
import necron_die_4_audio from './assets/audio/necrons/necron-die-4.mp3';
import necron_hit_audio from './assets/audio/necrons/necron-hit.mp3';
import necron_hit_2_audio from './assets/audio/necrons/necron-hit-2.mp3';
import necron_hit_3_audio from './assets/audio/necrons/necron-hit-3.mp3';
import necron_hit_4_audio from './assets/audio/necrons/necron-hit-4.mp3';
import necron_melee_audio from './assets/audio/necrons/necron-melee.mp3';
import necron_melee_2_audio from './assets/audio/necrons/necron-melee-2.mp3';
import necron_move_audio from './assets/audio/necrons/necron-move.mp3';
import reap_blade_audio from './assets/audio/necrons/reap-blade.mp3';
import scarab_attack_audio from './assets/audio/necrons/scarab-attack.mp3';
import scarab_die_audio from './assets/audio/necrons/scarab-die.mp3';
import scarab_move_audio from './assets/audio/necrons/scarab-move.mp3';
import tachyon_arrow_audio from './assets/audio/necrons/tachyon-arrow.mp3';
import threshers_audio from './assets/audio/necrons/threshers.mp3';

// UI icons
import ap from './assets/images/ap.png';
import blast from './assets/images/blast.png';
import bs from './assets/images/bs.png';
import dead from './assets/images/dead.png';
import mv from './assets/images/mv.png';
import sv from './assets/images/sv.png';
import ws from './assets/images/ws.png';

//
function App() {

  //
  const user_volume = 0.5;

  // Space Marine sounds
  const [bolter_pistol] = useSound(bolter_pistol_audio, { volume: user_volume });
  const [bolter_heavy] = useSound(bolter_heavy_audio, { volume: user_volume });
  const [chainsword] = useSound(chainsword_audio, { volume: user_volume });
  const [grenade] = useSound(grenade_audio, { volume: user_volume });
  const [biker_move] = useSound(biker_move_audio, { volume: user_volume });
  const [deflect_hit] = useSound(deflect_hit_audio, { volume: user_volume });
  const [infantry_take_damage] = useSound(infantry_take_damage_audio, { volume: user_volume });
  const [infantry_take_damage_2] = useSound(infantry_take_damage_2_audio, { volume: user_volume });
  const [biker_die] = useSound(biker_die_audio, { volume: user_volume });
  const [power_sword] =  useSound(power_sword_audio, { volume: user_volume });
  const [infantry_move] = useSound(infantry_move_audio, { volume:user_volume });
  const [infantry_die] = useSound(infantry_die_audio, { volume:user_volume });
  const [infantry_die_2] = useSound(infantry_die_2_audio, { volume:user_volume });
  const [plasma_pistol] = useSound(plasma_pistol_audio, { volume:user_volume });
  const [plasma_gun] = useSound(plasma_gun_audio, { volume:user_volume });
  const [biker_hit] = useSound(biker_hit_audio, { volume:user_volume });

  // Necron sounds
  const [gauss_flayer] = useSound(gauss_flayer_audio, { volume:user_volume });
  const [gauss_reaper] = useSound(gauss_reaper_audio, { volume:user_volume });
  const [glaive] = useSound(glaive_audio, { volume:user_volume });
  const [necron_die] = useSound(necron_die_audio, { volume:user_volume });
  const [necron_die_2] = useSound(necron_die_2_audio, { volume:user_volume });
  const [necron_die_3] = useSound(necron_die_3_audio, { volume:user_volume });
  const [necron_die_4] = useSound(necron_die_4_audio, { volume:user_volume });
  const [necron_hit] = useSound(necron_hit_audio, { volume:user_volume });
  const [necron_hit_2] = useSound(necron_hit_2_audio, { volume:user_volume });
  const [necron_hit_3] = useSound(necron_hit_3_audio, { volume:user_volume });
  const [necron_hit_4] = useSound(necron_hit_4_audio, { volume:user_volume });
  const [necron_melee] = useSound(necron_melee_audio, { volume:user_volume });
  const [necron_melee_2] = useSound(necron_melee_2_audio, { volume:user_volume });
  const [necron_move] = useSound(necron_move_audio, { volume:user_volume });
  const [reap_blade] = useSound(reap_blade_audio, { volume:user_volume });
  const [scarab_attack] = useSound(scarab_attack_audio, { volume:user_volume });
  const [scarab_move] = useSound(scarab_move_audio, { volume:user_volume });
  const [scarab_die] = useSound(scarab_die_audio, { volume:user_volume });
  const [tachyon_arrow] = useSound(tachyon_arrow_audio, { volume:user_volume });
  const [threshers] = useSound(threshers_audio, { volume:user_volume });

  return (

    <main>
      <h1 className="faction-header">
        <a href="https://wahapedia.ru/wh40k9ed/factions/space-marines/ultramarines" target="_blank" rel="noreferrer">Space Marines (Ultramarines)</a>
      </h1>

      <div className="faction-card md:flex-row md:w-auto border ultramarine-border ultramarine-bg p-6 space-y-6 md:space-y-0 md:space-x-6 justify-center rounded-none md:rounded-md border-l-0 border-r-0 md:border">

        <div className="unit-card border ultramarine-border md:min-w-[320px]">
          <h2 className="unit-card-header ultramarine-theme-color">
            <a href="https://wahapedia.ru/wh40k9ed/factions/space-marines/Primaris-Captain" target="_blank" rel="noreferrer">Primaris Captain</a>
          </h2>
          <div className="unit-equipment">
            <div className="unit-equipment-descriptions space-y-2">
              <span className="desc">Heavy bolt pistol</span>
              <span className="desc">Master-crafted power sword</span>
              <span className="desc">Relic shield</span>
              <span className="desc desc-last">Grenades</span>
            </div>
            <div className="unit-equipment-btns space-y-2">
              <img className="icon-button" src={bs} alt="icon" onClick={() => bolter_pistol()}/>
              <img className="icon-button" src={ws} alt="icon" onClick={() => power_sword()}/>
              <img className="icon-button" src={sv} alt="icon" onClick={() => deflect_hit()}/>
              <img className="icon-button" src={blast} alt="icon" onClick={() => grenade()}/>
            </div>
          </div>
          <div className="unit-actions justify-between">
            <img className="icon-button" src={mv} alt="icon" onClick={() => infantry_move()}/>
            <img className="icon-button" src={sv} alt="icon" onClick={() => deflect_hit()}/>
            <img className="icon-button" src={ap} alt="icon" onClick={() => infantry_take_damage_2()}/>
            <img className="icon-button" src={dead} alt="icon" onClick={() => infantry_die()}/>
          </div>
        </div> {/* end unit-card */}

        <div className="unit-card border ultramarine-border md:min-w-[320px]">
          <h2 className="unit-card-header ultramarine-theme-color">
            <a href="https://wahapedia.ru/wh40k9ed/factions/space-marines/Assault-Intercessor-Squad" target="_blank" rel="noreferrer">Assault Intercessor Squad</a>
          </h2>
          <div className="unit-equipment">
            <div className="unit-equipment-descriptions space-y-2">
              <span className="desc">Heavy bolt pistol</span>
              <span className="desc">Plasma pistol (standard)</span>
              <span className="desc">Plasma pistol (supercharged)</span>
              <span className="desc">Chainsword</span>
              <span className="desc desc-last">Grenades</span>
            </div>
            <div className="unit-equipment-btns space-y-2">
              <img className="icon-button" src={bs} alt="icon" onClick={() => bolter_pistol()}/>
              <img className="icon-button" src={bs} alt="icon" onClick={() => plasma_pistol()}/>
              <img className="icon-button" src={bs} alt="icon" onClick={() => plasma_gun()}/>
              <img className="icon-button" src={ws} alt="icon" onClick={() => chainsword()}/>
              <img className="icon-button" src={blast} alt="icon" onClick={() => grenade()}/>
            </div>
          </div>
          <div className="unit-actions justify-between">
            <img className="icon-button" src={mv} alt="icon" onClick={() => infantry_move()}/>
            <img className="icon-button" src={sv} alt="icon" onClick={() => deflect_hit()}/>
            <img className="icon-button" src={ap} alt="icon" onClick={() => infantry_take_damage()}/>
            <img className="icon-button" src={dead} alt="icon" onClick={() => infantry_die_2()}/>
          </div>
        </div> {/* end unit-card */}

        <div className="unit-card border ultramarine-border md:min-w-[320px]">
          <h2 className="unit-card-header ultramarine-theme-color">
            <a href="https://wahapedia.ru/wh40k9ed/factions/space-marines/Outrider-Squad" target="_blank" rel="noreferrer">Outrider Squad</a>
          </h2>
          <div className="unit-equipment">
            <div className="unit-equipment-descriptions space-y-2">
              <span className="desc">Heavy bolt pistol</span>
              <span className="desc">Twin bolt rifle</span>
              <span className="desc">Chainsword</span>
              <span className="desc desc-last">Grenades</span>
            </div>
            <div className="unit-equipment-btns space-y-2">
              <img className="icon-button" src={bs} alt="icon" onClick={() => bolter_pistol()}/>
              <img className="icon-button" src={bs} alt="icon" onClick={() => bolter_heavy()}/>
              <img className="icon-button" src={ws} alt="icon" onClick={() => chainsword()}/>
              <img className="icon-button" src={blast} alt="icon" onClick={() => grenade()}/>
            </div>
          </div>
          <div className="unit-actions justify-between">
            <img className="icon-button" src={mv} alt="icon" onClick={() => biker_move()}/>
            <img className="icon-button" src={sv} alt="icon" onClick={() => deflect_hit()}/>
            <img className="icon-button" src={ap} alt="icon" onClick={() => biker_hit()}/>
            <img className="icon-button" src={dead} alt="icon" onClick={() => biker_die()}/>
          </div>
        </div> {/* end unit-card */}
      </div> {/* end faction-card */}

      <h1 className="faction-header">
        <a href="https://wahapedia.ru/wh40k9ed/factions/necrons/" target="_blank" rel="noreferrer">Necrons (Szarekhan Dynasty)</a>
      </h1>

      <div className="faction-card md:grid md:grid-cols-3 md:gap-6 md:w-auto border necron-border necron-bg p-6 space-y-6 md:space-y-0  justify-center rounded-none md:rounded-md border-l-0 border-r-0 md:border">

        <div className="unit-card border necron-border md:min-w-[320px]">
          <h2 className="unit-card-header">
            <a href="https://wahapedia.ru/wh40k9ed/factions/necrons/Overlord" target="_blank" rel="noreferrer">Overlord</a>
          </h2>
          <div className="unit-equipment">
            <div className="unit-equipment-descriptions space-y-2">
              <span className="desc">Tachyon arrow</span>
              <span className="desc desc-last">Hyperphase glaive</span>
            </div>
            <div className="unit-equipment-btns space-y-2">
              <img className="icon-button" src={bs} alt="icon" onClick={() => tachyon_arrow()}/>
              <img className="icon-button" src={ws} alt="icon" onClick={() => glaive()}/>
            </div>
          </div>
          <div className="unit-actions justify-between">
            <img className="icon-button" src={mv} alt="icon" onClick={() => necron_move()}/>
            <img className="icon-button" src={sv} alt="icon" onClick={() => deflect_hit()}/>
            <img className="icon-button" src={ap} alt="icon" onClick={() => necron_hit()}/>
            <img className="icon-button" src={dead} alt="icon" onClick={() => necron_die()}/>
          </div>
        </div> {/* end unit-card */}

        <div className="unit-card border necron-border md:min-w-[320px]">
          <h2 className="unit-card-header">
            <a href="https://wahapedia.ru/wh40k9ed/factions/necrons/Necron-Warriors" target="_blank" rel="noreferrer">Necron Warriors</a>
          </h2>
          <div className="unit-equipment">
            <div className="unit-equipment-descriptions space-y-2">
              <span className="desc">Gauss flayer</span>
              <span className="desc">Gauss reaper</span>
              <span className="desc desc-last">Melee</span>
            </div>
            <div className="unit-equipment-btns space-y-2">
              <img className="icon-button" src={bs} alt="icon" onClick={() => gauss_flayer()}/>
              <img className="icon-button" src={bs} alt="icon" onClick={() => gauss_reaper()}/>
              <img className="icon-button" src={ws} alt="icon" onClick={() => necron_melee()}/>
            </div>
          </div>
          <div className="unit-actions justify-between">
            <img className="icon-button" src={mv} alt="icon" onClick={() => necron_move()}/>
            <img className="icon-button" src={sv} alt="icon" onClick={() => deflect_hit()}/>
            <img className="icon-button" src={ap} alt="icon" onClick={() => necron_hit_2()}/>
            <img className="icon-button" src={dead} alt="icon" onClick={() => necron_die_2()}/>
          </div>
        </div> {/* end unit-card */}

        <div className="unit-card border necron-border md:min-w-[320px]">
          <h2 className="unit-card-header">
            <a href="https://wahapedia.ru/wh40k9ed/factions/necrons/Skorpekh-Destroyers" target="_blank" rel="noreferrer">Skorpekh Destroyers</a>
          </h2>
          <div className="unit-equipment">
            <div className="unit-equipment-descriptions space-y-2">
              <span className="desc">Hyperphase reap-blade</span>
              <span className="desc desc-last">Hyperphase threshers</span>
            </div>
            <div className="unit-equipment-btns space-y-2">
              <img className="icon-button" src={ws} alt="icon" onClick={() => reap_blade()}/>
              <img className="icon-button" src={ws} alt="icon" onClick={() => threshers()}/>
            </div>
          </div>
          <div className="unit-actions justify-between">
            <img className="icon-button" src={mv} alt="icon" onClick={() => necron_move()}/>
            <img className="icon-button" src={sv} alt="icon" onClick={() => deflect_hit()}/>
            <img className="icon-button" src={ap} alt="icon" onClick={() => necron_hit_3()}/>
            <img className="icon-button" src={dead} alt="icon" onClick={() => necron_die_3()}/>
          </div>
        </div> {/* end unit-card */}

        <div className="unit-card border necron-border md:min-w-[320px]">
          <h2 className="unit-card-header">
            <a href="https://wahapedia.ru/wh40k9ed/factions/necrons/Canoptek-Plasmacyte" target="_blank" rel="noreferrer">Canoptek Plasmacyte</a>
          </h2>
          <div className="unit-equipment">
            <div className="unit-equipment-descriptions space-y-2">
              <span className="desc desc-last">Monomolecular proboscis</span>
            </div>
            <div className="unit-equipment-btns space-y-2">
              <img className="icon-button" src={ws} alt="icon" onClick={() => necron_melee_2()}/>
            </div>
          </div>
          <div className="unit-actions justify-between">
            <img className="icon-button" src={mv} alt="icon" onClick={() => necron_move()}/>
            <img className="icon-button" src={sv} alt="icon" onClick={() => deflect_hit()}/>
            <img className="icon-button" src={ap} alt="icon" onClick={() => necron_hit_4()}/>
            <img className="icon-button" src={dead} alt="icon" onClick={() => necron_die_4()}/>
          </div>
        </div> {/* end unit-card */}

        <div className="unit-card border necron-border md:min-w-[320px]">
          <h2 className="unit-card-header">
            <a href="https://wahapedia.ru/wh40k9ed/factions/necrons/Canoptek-Scarab-Swarms" target="_blank" rel="noreferrer">Canoptek Scarab Swarms</a>
          </h2>
          <div className="unit-equipment">
            <div className="unit-equipment-descriptions space-y-2">
              <span className="desc desc-last">Feeder mandibles</span>
            </div>
            <div className="unit-equipment-btns space-y-2">
              <img className="icon-button" src={ws} alt="icon" onClick={() => scarab_attack()}/>
            </div>
          </div>
          <div className="unit-actions justify-between">
            <img className="icon-button" src={mv} alt="icon" onClick={() => scarab_move()}/>
            <img className="icon-button" src={sv} alt="icon" onClick={() => deflect_hit()}/>
            <img className="icon-button" src={ap} alt="icon" onClick={() => necron_hit_2()}/>
            <img className="icon-button" src={dead} alt="icon" onClick={() => scarab_die()}/>
          </div>
        </div> {/* end unit-card */}

      </div> {/* end faction-card */}

      <div className="footer mt-8"></div>

    </main>

  )
}

export default App;