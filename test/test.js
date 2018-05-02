import test from 'ava'
import truncateWords from '../truncatewords'

const a = 'The nuclear deal is based on lies.'

test('truncate', t => {
    // Basic usage
    t.is(truncateWords(a, 4), 'The nuclear deal is [...]')
    // Don't truncate
    t.is(truncateWords(a, 9), 'The nuclear deal is based on lies.')
    // Very much truncate
    t.is(truncateWords(a, 0), '[...]')
    // Custom ending
    t.is(truncateWords(a, 2, '-powered'), 'The nuclear-powered')
})

const b = '\t\tPoland\tcannot   into\r\nspace\n'

test('normalize space', t => {
    // Only normalize
    t.is(truncateWords(b, 4), 'Poland cannot into space')
    // Normalize and truncate
    t.is(truncateWords(b, 1, ' stronk'), 'Poland stronk')
})

test('no words', t => {
    t.is(truncateWords('', 0), '')
    t.is(truncateWords('\r\n', 2), '')
})
