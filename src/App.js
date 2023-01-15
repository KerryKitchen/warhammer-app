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
import biker_die_audio from './assets/audio/space-marines/biker-die.mp3';
import power_sword_audio from './assets/audio/space-marines/power-sword.mp3';
import infantry_die_audio from './assets/audio/space-marines/infantry-die.mp3';
import infantry_move_audio from './assets/audio/space-marines/infantry-move.mp3';
import plasma_pistol_audio from './assets/audio/space-marines/plasma-pistol.mp3';

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

  const user_volume = 0.5;

  const [bolter_pistol] = useSound(bolter_pistol_audio, { volume: user_volume })
  const [bolter_heavy] = useSound(bolter_heavy_audio, { volume: user_volume });
  const [chainsword] = useSound(chainsword_audio, { volume: user_volume })
  const [grenade] = useSound(grenade_audio, { volume: user_volume })
  const [biker_move] = useSound(biker_move_audio, { volume: user_volume })
  const [deflect_hit] = useSound(deflect_hit_audio, { volume: user_volume })
  const [infantry_take_damage] = useSound(infantry_take_damage_audio, { volume: user_volume })
  const [biker_die] = useSound(biker_die_audio, { volume: user_volume })
  const [power_sword] =  useSound(power_sword_audio, { volume: user_volume })
  const [infantry_move] = useSound(infantry_move_audio, { volume:user_volume })
  const [infantry_die] = useSound(infantry_die_audio, { volume:user_volume })
  const [plasma_pistol] = useSound(plasma_pistol_audio, { volume:user_volume })

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
            <img className="icon-button" src={ap} alt="icon" onClick={() => infantry_take_damage()}/>
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
              <img className="icon-button" src={bs} alt="icon" onClick={() => plasma_pistol()}/>
              <img className="icon-button" src={ws} alt="icon" onClick={() => chainsword()}/>
              <img className="icon-button" src={blast} alt="icon" onClick={() => grenade()}/>
            </div>
          </div>
          <div className="unit-actions justify-between">
            <img className="icon-button" src={mv} alt="icon" onClick={() => infantry_move()}/>
            <img className="icon-button" src={sv} alt="icon" onClick={() => deflect_hit()}/>
            <img className="icon-button" src={ap} alt="icon" onClick={() => infantry_take_damage()}/>
            <img className="icon-button" src={dead} alt="icon" onClick={() => infantry_die()}/>
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
            <img className="icon-button" src={ap} alt="icon" onClick={() => infantry_take_damage()}/>
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
              <img className="icon-button" src={bs} alt="icon"/>
              <img className="icon-button" src={ws} alt="icon"/>
            </div>
          </div>
          <div className="unit-actions justify-between">
            <img className="icon-button" src={mv} alt="icon"/>
            <img className="icon-button" src={sv} alt="icon" onClick={() => deflect_hit()}/>
            <img className="icon-button" src={ap} alt="icon"/>
            <img className="icon-button" src={dead} alt="icon"/>
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
              <img className="icon-button" src={bs} alt="icon"/>
              <img className="icon-button" src={bs} alt="icon"/>
              <img className="icon-button" src={ws} alt="icon"/>
            </div>
          </div>
          <div className="unit-actions justify-between">
            <img className="icon-button" src={mv} alt="icon"/>
            <img className="icon-button" src={sv} alt="icon" onClick={() => deflect_hit()}/>
            <img className="icon-button" src={ap} alt="icon"/>
            <img className="icon-button" src={dead} alt="icon"/>
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
              <img className="icon-button" src={ws} alt="icon"/>
              <img className="icon-button" src={ws} alt="icon"/>
            </div>
          </div>
          <div className="unit-actions justify-between">
            <img className="icon-button" src={mv} alt="icon"/>
            <img className="icon-button" src={sv} alt="icon" onClick={() => deflect_hit()}/>
            <img className="icon-button" src={ap} alt="icon"/>
            <img className="icon-button" src={dead} alt="icon"/>
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
              <img className="icon-button" src={ws} alt="icon"/>
            </div>
          </div>
          <div className="unit-actions justify-between">
            <img className="icon-button" src={mv} alt="icon"/>
            <img className="icon-button" src={sv} alt="icon" onClick={() => deflect_hit()}/>
            <img className="icon-button" src={ap} alt="icon"/>
            <img className="icon-button" src={dead} alt="icon"/>
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
              <img className="icon-button" src={ws} alt="icon"/>
            </div>
          </div>
          <div className="unit-actions justify-between">
            <img className="icon-button" src={mv} alt="icon"/>
            <img className="icon-button" src={sv} alt="icon" onClick={() => deflect_hit()}/>
            <img className="icon-button" src={ap} alt="icon"/>
            <img className="icon-button" src={dead} alt="icon"/>
          </div>
        </div> {/* end unit-card */}

      </div> {/* end faction-card */}

      <div className="footer mt-8"></div>

    </main>

  )
}

export default App;