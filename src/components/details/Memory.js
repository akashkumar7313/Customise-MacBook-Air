import { useState } from 'react'
import { RadioGroup } from '@headlessui/react'

const memory = [
  {
    tittle: '8GB unified memory',
    price: '- ₹20000.00',
  },
  {
    tittle: '16GB unified memory',
    price: '+ ₹20000.00',
  },
  {
    tittle: '32GB unified memory',
    price: '+ ₹40000.00',
  },
]

export default function Storage() {
  const [selected, setSelected] = useState(memory[0])

  return (
    <div className="mt-6 font-semibold">
      <div className="">
        <RadioGroup value={selected} onChange={setSelected}>
          <RadioGroup.Label className="sr-only">Server size</RadioGroup.Label>
          <div className="space-y-5">
            {memory.map((memory) => (
              <RadioGroup.Option
                key={memory.tittle}
                value={memory}
                className={({ active, checked }) =>
                  `${
                    active
                      ? 'ring-2 ring-white ring-opacity-60 ring-offset-2 ring-offset-sky-300'
                      : ''
                  }
                  ${
                    checked ? 'bg-sky-900 bg-opacity-75 text-white' : 'bg-white'
                  }
                   relative flex cursor-pointer font-semibold text-[18px]  rounded-[10px] w-[360px] md:w-[500px] border-slate-400 border-[1px] px-5 py-4 shadow-md focus:outline-none`
                }
              >
                {({ active, checked }) => (
                  <>
                    <div className="  flex h-[50px] w-[500px] items-center justify-between">
                      <div className="flex items-center">
                        <div className="">
                          <RadioGroup.Label
                            as="p"
                            className={`font-medium  ${
                              checked ? 'text-white' : 'text-gray-900'
                            }`}
                          >
                            {memory.tittle}
                          </RadioGroup.Label>
                          <RadioGroup.Description
                            as="span"
                            className={`inline ${
                              checked ? 'text-sky-100' : 'text-gray-500'
                            }`}
                          >
                            <span aria-hidden="true"></span>{' '}
                            <span>{memory.price}</span>
                          </RadioGroup.Description>
                        </div>
                      </div>
                      {checked && (
                        <div className="shrink-0 text-white">
                          <CheckIcon className="h-6 w-6" />
                        </div>
                      )}
                    </div>
                  </>
                )}
              </RadioGroup.Option>
            ))}
          </div>
        </RadioGroup>
      </div>
    </div>
  )
}

function CheckIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <circle cx={12} cy={12} r={12} fill="#fff" opacity="0.2" />
      <path
        d="M7 13l3 3 7-7"
        stroke="#fff"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
