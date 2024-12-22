import { screen } from '@testing-library/react';
import React from 'react';

import TextField from '@/components/TextField';
import render from '@/utils/test/render';

it('className prop으로 설정한 css class가 적용된다.', async () => {
  /**
   * Arrange - 테스트를 위한 환경 만들기
   * -> className을 지닌 컴포넌트 렌더링
   * Act - 텍스트 할 동작 발생
   * -> 렌더링에 대한 검증이기 때문에 이 단계는 생략
   * -> 클릭이나 메서드 호출, prop 변경 등등에 대한 작업이 여기에 해당
   * Assert - 올바른 동작이 실행되엇는지 검증
   * -> 렌더링 후 DOM에 해당 class가 존재하는지 검증
   */

  /**
   * render API를 호출 -> 테스트 환경의 jsDOM에 리액트 컴포넌트가 렌더링된 DOM 구조가 반영
   * jsDOM: Node.js에서 사용하기 위해 많은 웹 표준을 순수 자바스크립트로 구현
   */
  await render(<TextField className="my-class" />);

  /**
   * className이란 내부 prop나 state 값을 검증 (x)
   * 렌더링되는 DOM 구조가 올바르게 변경되었는지 확인 (o) -> 최종적으로 사용자가 보는 결과는 DOM
   */
  const textInput = screen.getByPlaceholderText('텍스트를 입력해 주세요.');

  screen.debug(textInput);

  expect(textInput).toHaveClass('my-class');
});

describe('placeholder', () => {
  it('기본 placeholder "텍스트를 입력해 주세요."가 노출된다.', async () => {
    await render(<TextField />);

    const textInput = screen.getByPlaceholderText('텍스트를 입력해 주세요.');

    expect(textInput).toBeInTheDocument();
  });

  it('placeholder prop에 따라 placeholder가 변경된다.', async () => {
    await render(<TextField placeholder="상품명을 입력해주세요." />);

    const textInput = screen.getByPlaceholderText('상품명을 입력해주세요.');

    expect(textInput).toBeInTheDocument();
  });
});
