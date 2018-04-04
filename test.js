import test from 'ava';
import m from '.';

test(t => {
	t.true(m('abc123'));
	t.false(m('abc 123'));
	t.false(m('abc123 '));
	t.false(m(' abc123'));
	t.false(m('   abc123   '));
	t.false(m('abc-123'));
	t.false(m('abc123#'));
	t.false(m('123abc'));
	t.false(m('123 abc'));
	t.false(m('123-abc'));
	t.false(m('abc123abc'));
	t.false(m('a'));
	t.false(m('abc'));
	t.false(m('0'));
	t.false(m('123'));
	t.is(m(1), undefined);
});
