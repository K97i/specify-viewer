
import type { CustomThemeConfig } from '@skeletonlabs/tw-plugin';

export const specifyTheme: CustomThemeConfig = {
    name: 'specify-theme',
    properties: {
		// =~= Theme Properties =~=
		"--theme-font-family-base": `JetBrains Mono, ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace`,
		"--theme-font-family-heading": `JetBrains Mono, ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace`,
		"--theme-font-color-base": "0 0 0",
		"--theme-font-color-dark": "255 255 255",
		"--theme-rounded-base": "4px",
		"--theme-rounded-container": "8px",
		"--theme-border-base": "1px",
		// =~= Theme On-X Colors =~=
		"--on-primary": "255 255 255",
		"--on-secondary": "var(--color-primary-700)",
		"--on-tertiary": "var(--color-primary-700)",
		"--on-success": "var(--color-primary-700)",
		"--on-warning": "var(--color-primary-700)",
		"--on-error": "255 255 255",
		"--on-surface": "255 255 255",
		// =~= Theme Colors  =~=
		// primary | #1a1c1d 
		"--color-primary-50": "221 221 221", // #dddddd
		"--color-primary-100": "209 210 210", // #d1d2d2
		"--color-primary-200": "198 198 199", // #c6c6c7
		"--color-primary-300": "163 164 165", // #a3a4a5
		"--color-primary-400": "95 96 97", // #5f6061
		"--color-primary-500": "26 28 29", // #1a1c1d
		"--color-primary-600": "23 25 26", // #17191a
		"--color-primary-700": "20 21 22", // #141516
		"--color-primary-800": "16 17 17", // #101111
		"--color-primary-900": "13 14 14", // #0d0e0e
		// secondary | #3abde7 
		"--color-secondary-50": "225 245 251", // #e1f5fb
		"--color-secondary-100": "216 242 250", // #d8f2fa
		"--color-secondary-200": "206 239 249", // #ceeff9
		"--color-secondary-300": "176 229 245", // #b0e5f5
		"--color-secondary-400": "117 209 238", // #75d1ee
		"--color-secondary-500": "58 189 231", // #3abde7
		"--color-secondary-600": "52 170 208", // #34aad0
		"--color-secondary-700": "44 142 173", // #2c8ead
		"--color-secondary-800": "35 113 139", // #23718b
		"--color-secondary-900": "28 93 113", // #1c5d71
		// tertiary | #ff7a22 
		"--color-tertiary-50": "255 235 222", // #ffebde
		"--color-tertiary-100": "255 228 211", // #ffe4d3
		"--color-tertiary-200": "255 222 200", // #ffdec8
		"--color-tertiary-300": "255 202 167", // #ffcaa7
		"--color-tertiary-400": "255 162 100", // #ffa264
		"--color-tertiary-500": "255 122 34", // #ff7a22
		"--color-tertiary-600": "230 110 31", // #e66e1f
		"--color-tertiary-700": "191 92 26", // #bf5c1a
		"--color-tertiary-800": "153 73 20", // #994914
		"--color-tertiary-900": "125 60 17", // #7d3c11
		// success | #69ff69 
		"--color-success-50": "233 255 233", // #e9ffe9
		"--color-success-100": "225 255 225", // #e1ffe1
		"--color-success-200": "218 255 218", // #daffda
		"--color-success-300": "195 255 195", // #c3ffc3
		"--color-success-400": "150 255 150", // #96ff96
		"--color-success-500": "105 255 105", // #69ff69
		"--color-success-600": "95 230 95", // #5fe65f
		"--color-success-700": "79 191 79", // #4fbf4f
		"--color-success-800": "63 153 63", // #3f993f
		"--color-success-900": "51 125 51", // #337d33
		// warning | #eeba1e 
		"--color-warning-50": "252 245 221", // #fcf5dd
		"--color-warning-100": "252 241 210", // #fcf1d2
		"--color-warning-200": "251 238 199", // #fbeec7
		"--color-warning-300": "248 227 165", // #f8e3a5
		"--color-warning-400": "243 207 98", // #f3cf62
		"--color-warning-500": "238 186 30", // #eeba1e
		"--color-warning-600": "214 167 27", // #d6a71b
		"--color-warning-700": "179 140 23", // #b38c17
		"--color-warning-800": "143 112 18", // #8f7012
		"--color-warning-900": "117 91 15", // #755b0f
		// error | #af1b1b 
		"--color-error-50": "243 221 221", // #f3dddd
		"--color-error-100": "239 209 209", // #efd1d1
		"--color-error-200": "235 198 198", // #ebc6c6
		"--color-error-300": "223 164 164", // #dfa4a4
		"--color-error-400": "199 95 95", // #c75f5f
		"--color-error-500": "175 27 27", // #af1b1b
		"--color-error-600": "158 24 24", // #9e1818
		"--color-error-700": "131 20 20", // #831414
		"--color-error-800": "105 16 16", // #691010
		"--color-error-900": "86 13 13", // #560d0d
		// surface | #131516 
		"--color-surface-50": "220 220 220", // #dcdcdc
		"--color-surface-100": "208 208 208", // #d0d0d0
		"--color-surface-200": "196 197 197", // #c4c5c5
		"--color-surface-300": "161 161 162", // #a1a1a2
		"--color-surface-400": "90 91 92", // #5a5b5c
		"--color-surface-500": "19 21 22", // #131516
		"--color-surface-600": "17 19 20", // #111314
		"--color-surface-700": "14 16 17", // #0e1011
		"--color-surface-800": "11 13 13", // #0b0d0d
		"--color-surface-900": "9 10 11", // #090a0b
		
	}
}