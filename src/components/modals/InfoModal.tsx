import { Cell } from '../grid/Cell'
import { BaseModal } from './BaseModal'

type Props = {
  isOpen: boolean
  handleClose: () => void
}

export const InfoModal = ({ isOpen, handleClose }: Props) => {
  return (
    <BaseModal title="How to play" isOpen={isOpen} handleClose={handleClose}>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        Guess the word in 7 tries. After each guess, the color of the tiles will
        change to show how close your guess was to the word. <br></br><br></br> Names of idolish7 main characters, side characters, kuji characters, mascots, and groups are included.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell
          isRevealing={true}
          isCompleted={true}
          value="T"
          status="correct"
        />
        <Cell value="E" />
        <Cell value="N" />
        <Cell value="N" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        The letter T is in the word and in the correct spot.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="G" />
        <Cell value="A" />
        <Cell
          isRevealing={true}
          isCompleted={true}
          value="K"
          status="present"
        />
        <Cell value="U" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        The letter K is in the word but in the wrong spot.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="R" />
        <Cell value="Y" />
        <Cell value="U" />
        <Cell isRevealing={true} isCompleted={true} value="N" status="absent" />
        <Cell value="O" />
        <Cell value="S" />
        <Cell value="U" />
        <Cell value="K" />
        <Cell value="E" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        The letter N is not in the word in any spot.
      </p>

      <p className="mt-6 italic text-sm text-gray-500 dark:text-gray-300">
        This is an open source version of the word guessing game we all know and
        love. Modified by <a href="https://mobile.twitter.com/sanyoucity" className="underline font-bold">sanyoucity</a>. Original code by {' '}
        <a
          href="https://github.com/cwackerfuss/react-wordle"
          className="underline font-bold"
        >
          cwackerfuss
        </a>.{' '}
      </p>
    </BaseModal>
  )
}
