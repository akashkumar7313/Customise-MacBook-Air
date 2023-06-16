import { useState } from 'react'
import { RadioGroup } from '@headlessui/react'

const Adapter = [
  {
    tittle: '35W Dual USB-C Port Power',
    type: 'Adapter',
  },
  {
    tittle: '70W USB-C Power Adapter',
    type: 'Adapter',
  },
]

export default function PowerAdapter() {
  const [selected, setSelected] = useState(Adapter[0])

  return (
    <div className="mt-6 font-semibold">
      <div className="">
        <RadioGroup value={selected} onChange={setSelected}>
          <RadioGroup.Label className="sr-only">Server size</RadioGroup.Label>
          <div className="space-y-5">
            {Adapter.map((plan) => (
              <RadioGroup.Option
                key={plan.tittle}
                value={plan}
                className={({ active, checked }) =>
                  `${
                    active
                      ? 'ring-2 ring-white ring-opacity-60 ring-offset-2 ring-offset-sky-300'
                      : ''
                  }
                  ${
                    checked ? 'bg-sky-900 bg-opacity-75 text-white' : 'bg-white'
                  }
                    relative flex cursor-pointer font-semibold text-[18px]  w-[360px] md:w-[500px] rounded-[10px]  border-slate-400 border-[1px] px-5 py-4 shadow-md focus:outline-none`
                }
              >
                {({ active, checked }) => (
                  <>
                    <div className="flex h-[50px] w-[500px] items-center justify-between">
                      <div className="items-center">
                        <div className="">
                          <RadioGroup.Label
                            as="p"
                            className={`font-medium  ${
                              checked ? 'text-white' : 'text-gray-900'
                            }`}
                          >
                            {plan.tittle}
                          </RadioGroup.Label>
                          <RadioGroup.Description
                            as="span"
                            className={`inline ${
                              checked ? 'text-sky-100' : 'text-gray-500'
                            }`}
                          >
                            <span aria-hidden="true"></span>{' '}
                            <span>{plan.type}</span>
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
