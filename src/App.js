import useSound from 'use-sound';
import './App.css';
import './input.css';

// Space Marine sound files
import bolter_heavy_audio from './assets/audio/space-marines/bolter-heavy.mp3';
import bolter_pistol_audio from './assets/audio/space-marines/bolter-pistol.mp3';
import chainsword_audio from './assets/audio/space-marines/chainsword.mp3';
import grenade_audio from './assets/audio/space-marines/grenade.mp3';
import biker_move_audio from './assets/audio/space-marines/biker-move.mp3';
import biker_deflect_audio from './assets/audio/space-marines/biker-deflect.mp3';
import infantry_take_damage_audio from './assets/audio/space-marines/infantry-take-damage.mp3';
import biker_die_audio from './assets/audio/space-marines/biker-die.mp3';


function App() {

  const user_volume = 0.45;

  const [bolter_pistol] = useSound(bolter_pistol_audio, { volume: user_volume })
  const [bolter_heavy] = useSound(bolter_heavy_audio, { volume: user_volume });
  const [chainsword] = useSound(chainsword_audio, { volume: user_volume })
  const [grenade] = useSound(grenade_audio, { volume: user_volume })
  const [biker_move] = useSound(biker_move_audio, { volume: user_volume })
  const [biker_deflect] = useSound(biker_deflect_audio, { volume: user_volume })
  const [infantry_take_damage] = useSound(infantry_take_damage_audio, { volume: user_volume })
  const [biker_die] = useSound(biker_die_audio, { volume: user_volume })

  return (
    <div className="flex flex-col">
    <a href="https://wahapedia.ru/wh40k9ed/factions/space-marines/ultramarines" target="_blank" rel="noreferrer"><h1 className="font-bold text-xl mb-4">Space Marines | Ultramarines</h1></a>

      <div className="unit-box w-96">

        <a href="https://wahapedia.ru/wh40k9ed/factions/space-marines/Outrider-Squad" target="_blank" rel="noreferrer">
          <h2 className="font-semibold mb-2">Outrider Squad</h2>
        </a>
        
        <p className="font-semibold text-sm mb-1 subheading">Weapons</p>
        <div className="grid grid-cols-2">
          <span>Heavy bolt pistol</span><button onClick={() => bolter_pistol()}>⏵</button>
          <span>Twin bolt rifle</span><button onClick={() => bolter_heavy()}>⏵</button>
          <span>Astartes chainsword</span><button onClick={() => chainsword()}>⏵</button>
          <span>Grenade</span><button onClick={() => grenade()}>⏵</button>
        </div>

        <p className="font-semibold text-sm mb-1 subheading">Actions</p>
        <div className="grid grid-cols-2">
          <span>Move unit</span><button onClick={() => biker_move()}>⏵</button>
          <span>Deflect damage</span><button onClick={() => biker_deflect()}>⏵</button>
          <span>Take Damage</span><button onClick={() => infantry_take_damage()}>⏵</button>
          <span>Kill unit</span><button onClick={() => biker_die()}>⏵</button>
        </div>

      </div>
      
    </div>
  )
}

export default App;