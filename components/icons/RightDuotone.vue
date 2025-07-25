<template>
  <svg
    width="68"
    height="20"
    viewBox="0 0 68 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g filter="url(#filter0_n_36_325)">
      <circle cx="10" cy="10" r="10" fill="#F64977" />
      <circle cx="32" cy="10" r="8" fill="#F64977" />
      <circle cx="50" cy="10" r="6" fill="#F64977" />
      <circle cx="64" cy="10" r="4" fill="#F64977" />
    </g>
    <defs>
      <filter
        id="filter0_n_36_325"
        x="0"
        y="0"
        width="68"
        height="20"
        filterUnits="userSpaceOnUse"
        color-interpolation-filters="sRGB"
      >
        <feFlood flood-opacity="0" result="BackgroundImageFix" />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="BackgroundImageFix"
          result="shape"
        />
        <feTurbulence
          type="fractalNoise"
          baseFrequency="2 2"
          stitchTiles="stitch"
          numOctaves="3"
          result="noise"
          seed="5632"
        />
        <feColorMatrix in="noise" type="luminanceToAlpha" result="alphaNoise" />
        <feComponentTransfer in="alphaNoise" result="coloredNoise1">
          <feFuncA
            type="discrete"
            tableValues="1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 "
          />
        </feComponentTransfer>
        <feComposite
          operator="in"
          in2="shape"
          in="coloredNoise1"
          result="noise1Clipped"
        />
        <feComponentTransfer in="alphaNoise" result="coloredNoise2">
          <feFuncA
            type="discrete"
            tableValues="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 "
          />
        </feComponentTransfer>
        <feComposite
          operator="in"
          in2="shape"
          in="coloredNoise2"
          result="noise2Clipped"
        />
        <feFlood flood-color="#E61636" result="color1Flood" />
        <feComposite
          operator="in"
          in2="noise1Clipped"
          in="color1Flood"
          result="color1"
        />
        <feFlood flood-color="rgba(255, 255, 255, 0.25)" result="color2Flood" />
        <feComposite
          operator="in"
          in2="noise2Clipped"
          in="color2Flood"
          result="color2"
        />
        <feMerge result="effect1_noise_36_325">
          <feMergeNode in="shape" />
          <feMergeNode in="color1" />
          <feMergeNode in="color2" />
        </feMerge>
      </filter>
    </defs>
  </svg>
</template>
