export type IconKind =
  | "arrow"
  | "code-brackets"
  | "refresh"
  | "play"
  | "stop"
  | "chevron-down"
  | "chevron-up"
  | "globe"
  | "settings"
  | "search"
  | "search-submit"
  | "option-selected"
  | "option-unselected";
interface IconProps {
  kind: IconKind;
  className?: string;
}
/**
 * Renders an icon
 */
export const Icon = (props: IconProps) => {
  switch (props.kind) {
    case "arrow":
      return (
        <svg
          width="21"
          height="11"
          viewBox="0 0 21 11"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden
          className={props.className}
        >
          <path
            d="M15.353 0.146446L20.7065 5.5L15.353 10.8536C15.1577 11.0488 14.8411 11.0488 14.6459 10.8536C14.4506 10.6583 14.4506 10.3417 14.6459 10.1464L18.7923 6L4.99951 6C4.72337 6 4.49951 5.77614 4.49951 5.5C4.49951 5.22386 4.72337 5 4.99951 5L18.7923 5L14.6459 0.853553C14.4506 0.658291 14.4506 0.341708 14.6459 0.146446C14.8411 -0.0488155 15.1577 -0.0488155 15.353 0.146446Z"
            fill="black"
          />
        </svg>
      );
    case "chevron-down":
      return (
        <svg
          width="22"
          height="12"
          viewBox="0 0 22 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M11 11.707L21.3536 1.35348C21.5488 1.15822 21.5488 0.841633 21.3536 0.646371C21.1583 0.451109 20.8417 0.451109 20.6464 0.646371L11 10.2928L1.35355 0.646371C1.15829 0.451109 0.841709 0.451109 0.646447 0.646371C0.451184 0.841633 0.451184 1.15822 0.646447 1.35348L11 11.707Z"
            fill="black"
          />
        </svg>
      );
    case "code-brackets":
      return (
        <svg
          width="22"
          height="18"
          viewBox="0 0 22 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden
          className={props.className}
        >
          <path
            d="M13.9764 0.718843C14.0606 0.455859 13.9105 0.193701 13.641 0.133296C13.3716 0.0728911 13.0848 0.237114 13.0006 0.500098L7.87626 16.5001C7.79204 16.7631 7.94219 17.0252 8.21165 17.0856C8.4811 17.146 8.76782 16.9818 8.85205 16.7188L13.9764 0.718843Z"
            fill="black"
          />
          <path
            d="M21.707 8.49999L16.3535 3.14644C16.1582 2.95118 15.8416 2.95118 15.6464 3.14644C15.4511 3.3417 15.4511 3.65828 15.6464 3.85355L20.2928 8.49999L15.6464 13.1464C15.4511 13.3417 15.4511 13.6583 15.6464 13.8535C15.8416 14.0488 16.1582 14.0488 16.3535 13.8535L21.707 8.49999Z"
            fill="black"
          />
          <path
            d="M0.292969 8.49999L5.64652 13.8535C5.84178 14.0488 6.15837 14.0488 6.35363 13.8535C6.54889 13.6583 6.54889 13.3417 6.35363 13.1464L1.70718 8.49999L6.35363 3.85355C6.54889 3.65828 6.54889 3.3417 6.35363 3.14644C6.15837 2.95118 5.84178 2.95118 5.64652 3.14644L0.292969 8.49999Z"
            fill="black"
          />
        </svg>
      );
    case "refresh":
      return (
        <svg
          width="18"
          height="24"
          viewBox="0 0 18 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M14.3597 0.745963L15.9691 6.75275L9.96235 8.36232C9.69562 8.43379 9.42145 8.2755 9.34998 8.00877C9.2785 7.74204 9.43679 7.46787 9.70353 7.39639L14.0814 6.22329C12.7385 5.02054 10.9658 4.28984 9.02153 4.28986C4.83114 4.28989 1.43412 7.68694 1.43408 11.8774C1.43408 12.1535 1.21022 12.3774 0.934077 12.3774C0.657935 12.3774 0.43408 12.1535 0.434082 11.8774C0.434122 7.13467 4.27885 3.2899 9.02154 3.28986C11.1249 3.28984 13.0522 4.04653 14.545 5.30172L13.3937 1.00477C13.3223 0.738039 13.4806 0.463872 13.7473 0.392404C14.014 0.320936 14.2882 0.47923 14.3597 0.745963Z"
            fill="black"
          />
          <path
            d="M3.3684 18.4804L4.52046 22.7801C4.59193 23.0468 4.43363 23.321 4.1669 23.3924C3.90017 23.4639 3.626 23.3056 3.55453 23.0389L1.94508 17.0321L7.95183 15.4225C8.21856 15.3511 8.49274 15.5093 8.56421 15.7761C8.63568 16.0428 8.47739 16.317 8.21066 16.3885L3.83466 17.5611C5.17757 18.7638 6.95034 19.4945 8.8946 19.4945C13.085 19.4945 16.482 16.0974 16.4821 11.907C16.4821 11.6308 16.7059 11.407 16.9821 11.407C17.2582 11.407 17.4821 11.6308 17.4821 11.907C17.482 16.6497 13.6373 20.4945 8.8946 20.4945C6.79 20.4945 4.86161 19.7369 3.3684 18.4804Z"
            fill="black"
          />
        </svg>
      );
    case "play":
      return (
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M15.5 8L0.5 15.5L0.499999 0.500001L15.5 8Z" fill="black" />
        </svg>
      );
    case "stop":
      return (
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect x="0.5" y="0.5" width="15" height="15" fill="black" />
        </svg>
      );
    case "globe":
      return (
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20ZM18.9863 10.5H15.9468C15.8456 13.5376 14.8288 15.7593 13.6281 17.2459C13.107 17.8911 12.5512 18.3979 12.021 18.7722C15.8616 17.891 18.7644 14.5525 18.9863 10.5ZM15.9468 9.5C15.8457 6.46232 14.8289 4.24052 13.6281 2.75393C13.1071 2.10886 12.5514 1.60221 12.0214 1.2279C15.8618 2.10925 18.7644 5.44765 18.9863 9.5H15.9468ZM14.9462 9.5H10.5V1.52488C10.6892 1.5964 10.9139 1.70476 11.1655 1.86004C11.6907 2.18428 12.2877 2.68582 12.8502 3.38226C13.9091 4.69323 14.846 6.69515 14.9462 9.5ZM9.5 10.5H5.05378C5.154 13.3049 6.09094 15.3068 7.1498 16.6177C7.71232 17.3142 8.30927 17.8157 8.83455 18.14C9.08609 18.2952 9.31079 18.4036 9.5 18.4751V10.5ZM5.05378 9.5H9.5V1.52506C9.31079 1.59658 9.08609 1.70494 8.83455 1.86022C8.30927 2.18446 7.71232 2.68599 7.1498 3.38244C6.09097 4.69338 5.15404 6.69524 5.05378 9.5ZM4.05319 9.5H1.01365C1.23556 5.44751 4.13842 2.10903 7.97897 1.22782C7.44881 1.60215 6.893 2.10888 6.37186 2.7541C5.17117 4.24067 4.15438 6.46241 4.05319 9.5ZM4.05318 10.5H1.01365C1.23555 14.5524 4.13823 17.8908 7.9786 18.7721C7.44856 18.3978 6.89288 17.8911 6.37186 17.2461C5.17115 15.7595 4.15434 13.5377 4.05318 10.5ZM14.9462 10.5H10.5V18.4749C10.6892 18.4034 10.9139 18.2951 11.1655 18.1398C11.6907 17.8155 12.2877 17.314 12.8502 16.6176C13.909 15.3066 14.846 13.3048 14.9462 10.5Z"
            fill="black"
          />
        </svg>
      );
    case "option-unselected":
      return (
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M10 19C14.9706 19 19 14.9706 19 10C19 5.02944 14.9706 1 10 1C5.02944 1 1 5.02944 1 10C1 14.9706 5.02944 19 10 19ZM10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20Z"
            fill="black"
          />
        </svg>
      );
    case "option-selected":
      return (
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20Z"
            fill="black"
          />
        </svg>
      );
    case "chevron-up":
      return (
        <svg
          width="22"
          height="12"
          viewBox="0 0 22 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M11 0.292969L0.646447 10.6465C0.451184 10.8418 0.451184 11.1584 0.646447 11.3536C0.84171 11.5489 1.15829 11.5489 1.35355 11.3536L11 1.70718L20.6464 11.3536C20.8417 11.5489 21.1583 11.5489 21.3536 11.3536C21.5488 11.1584 21.5488 10.8418 21.3536 10.6465L11 0.292969Z"
            fill="black"
          />
        </svg>
      );
    case "settings":
      return (
        <svg
          width="22"
          height="19"
          viewBox="0 0 22 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M4.03544 4C4.27806 5.69615 5.73676 7 7.5 7C9.26324 7 10.7219 5.69615 10.9646 4L21 4C21.2761 4 21.5 3.77614 21.5 3.5C21.5 3.22386 21.2761 3 21 3L10.9646 3C10.7219 1.30385 9.26324 0 7.5 0C5.73676 0 4.27806 1.30385 4.03544 3H1C0.723858 3 0.5 3.22386 0.5 3.5C0.5 3.77614 0.723858 4 1 4H4.03544ZM7.5 6C8.88071 6 10 4.88071 10 3.5C10 2.11929 8.88071 1 7.5 1C6.11929 1 5 2.11929 5 3.5C5 4.88071 6.11929 6 7.5 6Z"
            fill="black"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M14.5 9C16.2632 9 17.7219 10.3039 17.9646 12H21C21.2761 12 21.5 12.2239 21.5 12.5C21.5 12.7761 21.2761 13 21 13H17.9646C17.7219 14.6961 16.2632 16 14.5 16C12.7363 16 11.2774 14.6955 11.0353 12.9988C11.0236 12.9996 11.0119 13 11 13H1C0.723858 13 0.5 12.7761 0.5 12.5C0.5 12.2239 0.723858 12 1 12H11C11.0119 12 11.0236 12.0004 11.0353 12.0012C11.2774 10.3045 12.7363 9 14.5 9ZM12 12.5C12 11.1193 13.1193 10 14.5 10C15.8807 10 17 11.1193 17 12.5C17 13.8807 15.8807 15 14.5 15C13.1193 15 12 13.8807 12 12.5Z"
            fill="black"
          />
        </svg>
      );
    case "search":
      return (
        <svg
          width="21"
          height="21"
          viewBox="0 0 21 21"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M13.2694 14.0196C11.8619 15.2526 10.0182 16 8 16C3.58172 16 0 12.4183 0 8C0 3.58172 3.58172 0 8 0C12.4183 0 16 3.58172 16 8C16 10.0402 15.2363 11.902 13.9792 13.3151L19.957 19.2929C20.1522 19.4882 20.1522 19.8048 19.957 20C19.7617 20.1953 19.4451 20.1953 19.2499 20L13.2694 14.0196ZM15 8C15 11.866 11.866 15 8 15C4.13401 15 1 11.866 1 8C1 4.13401 4.13401 1 8 1C11.866 1 15 4.13401 15 8Z"
            fill="black"
          />
        </svg>
      );
    case "search-submit":
      return (
        <svg
          width="21"
          height="11"
          viewBox="0 0 21 11"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15.3535 0.146446L20.707 5.5L15.3535 10.8536C15.1582 11.0488 14.8416 11.0488 14.6464 10.8536C14.4511 10.6583 14.4511 10.3417 14.6464 10.1464L18.7928 6L5 6C4.72386 6 4.5 5.77614 4.5 5.5C4.5 5.22386 4.72386 5 5 5L18.7928 5L14.6464 0.853553C14.4511 0.658291 14.4511 0.341708 14.6464 0.146446C14.8416 -0.0488155 15.1582 -0.0488155 15.3535 0.146446Z"
            fill="black"
          />
        </svg>
      );
    default:
      return null;
  }
};
